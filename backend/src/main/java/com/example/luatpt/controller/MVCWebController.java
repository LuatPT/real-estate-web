package com.example.luatpt.controller;

import com.example.luatpt.entity.Token;
import com.example.luatpt.entity.User;
import com.example.luatpt.model.user.CustomUserDetails;
import com.example.luatpt.security.jwt.JwtTokenProvider;
import com.example.luatpt.security.payload.request.LoginRequest;
import com.example.luatpt.security.payload.request.RegisterRequest;
import com.example.luatpt.security.payload.response.RegisterResponse;
import com.example.luatpt.service.token.TokenService;
import com.example.luatpt.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.Arrays;

@Controller
@RequestMapping("/web/v1")
public class MVCWebController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    private TokenService tokenService;

    @GetMapping("/home")
    public String showHomePage() {
        return "home";
    }

    @GetMapping("/login")
    public String showLogin() {
        return "login";
    }

    @GetMapping("/register")
    public String showRegister() {
        return "register";
    }

    @GetMapping("/hello")
    public String showHeloPage(HttpServletRequest request, HttpServletResponse response) {
        return "hello";
    }

    @PostMapping(value = "/signIn", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String logIn(@Valid LoginRequest user, HttpServletResponse response) throws IOException {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        User userByEmail = userService.loadUserByEmail(user.getEmail());
        String accessToken = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        Token token = tokenService.createRefreshToken(userByEmail.getId());

        Cookie accessTokenCookies = new Cookie("token", accessToken);
        response.addCookie(accessTokenCookies);
        Cookie userCookies = new Cookie("user", user.getEmail());
        response.addCookie(userCookies);
        return "redirect:/web/v1/hello";
    }

    @PostMapping("/signUp")
    public String register(@Valid RegisterRequest request) {
        RegisterResponse response = userService.registerUser(request);
        if (response == null) {
            return "redirect:/web/v1/error";
        }
        return "redirect:/web/v1/login";
    }

    @PostMapping("/signOut")
    public String logoutUser(HttpServletRequest request, HttpServletResponse response) {
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
                return "redirect:/web/v1/home";
            }
            return "redirect:/web/v1/error";
        }
        return "redirect:/web/v1/error";
    }
}
