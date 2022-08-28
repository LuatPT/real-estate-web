package com.example.luatpt.controller;

import com.example.luatpt.entity.Token;
import com.example.luatpt.entity.User;
import com.example.luatpt.model.user.CustomUserDetails;
import com.example.luatpt.security.jwt.JwtTokenProvider;
import com.example.luatpt.security.payload.request.LoginRequest;
import com.example.luatpt.security.payload.request.RegisterRequest;
import com.example.luatpt.security.payload.request.TokenRefreshRequest;
import com.example.luatpt.security.payload.response.LoginResponse;
import com.example.luatpt.security.payload.response.RegisterResponse;
import com.example.luatpt.security.payload.response.TokenRefreshResponse;
import com.example.luatpt.service.token.TokenService;
import com.example.luatpt.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class WebController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/signIn")
    public ResponseEntity<LoginResponse> logIn(@Valid @RequestBody LoginRequest loginRequest, HttpServletResponse response) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User userByEmail = userService.loadUserByEmail(loginRequest.getEmail());
        String accessToken = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        Token token = tokenService.createRefreshToken(userByEmail.getId());

        Cookie accessTokenCookies = new Cookie("token", accessToken);
        response.addCookie(accessTokenCookies);
        Cookie userCookies = new Cookie("user", loginRequest.getEmail());
        response.addCookie(userCookies);

        LoginResponse loginResponse = userService.buildLoginResponse(userByEmail, accessToken, token.getRefreshToken());
        return ResponseEntity.ok().body(loginResponse);
    }

    @PostMapping("/signUp")
    public ResponseEntity<RegisterResponse> register(@Valid @RequestBody RegisterRequest request) throws URISyntaxException {
        RegisterResponse response = userService.registerUser(request);
        if (response == null) {
            return ResponseEntity.internalServerError().build();
        }
        return ResponseEntity.created(new URI("/api/v1/users")).body(response);
    }

    @PostMapping("/signOut")
    public ResponseEntity<?> logoutUser(HttpServletRequest request, HttpServletResponse response) {
        String userEmail;
        if (request.getCookies() != null) {
            userEmail = Arrays.stream(request.getCookies()).filter(c -> c.getName().equals("user"))
                    .findFirst().map(Cookie::getValue).orElse(null);
            if (userEmail != null && !userEmail.equals("")) {
                User user = userService.loadUserByEmail(userEmail);
                tokenService.deleteByUser(user);
                //Remove user_email in cookie
                Cookie userCookies = new Cookie("user", "");
                response.addCookie(userCookies);
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.internalServerError().build();
        }
        return ResponseEntity.internalServerError().build();
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshtoken(@Valid @RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();
        Optional<Token> refreshToken = tokenService.findByToken(requestRefreshToken);
        if (refreshToken.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        boolean tokenValidate = tokenService.verifyExpiration(refreshToken.get());
        if (tokenValidate) {
            return ResponseEntity.badRequest().body("Refresh token expired, please sign in again!");
        }

        String accessToken = tokenProvider.generateToken(new CustomUserDetails(refreshToken.get().getUser()));
        TokenRefreshResponse response = new TokenRefreshResponse(accessToken, refreshToken.get().getRefreshToken());
        return ResponseEntity.ok().body(response);
    }
}
