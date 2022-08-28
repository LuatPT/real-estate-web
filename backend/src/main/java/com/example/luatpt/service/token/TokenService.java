package com.example.luatpt.service.token;

import com.example.luatpt.entity.Token;
import com.example.luatpt.entity.User;
import com.example.luatpt.repository.token.TokenRepository;
import com.example.luatpt.repository.user.UserRepository;
import com.example.luatpt.utils.ErrorMessage;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;

@Service
@Slf4j
public class TokenService {

    @Value("2592000000")
    private Long refreshTokenDurationMs;

    @Autowired
    private TokenRepository tokenRepository;

    @Autowired
    private UserRepository userRepository;

    public Optional<Token> findByToken(String token) {
        return tokenRepository.findByRefreshToken(token);
    }


    public Token createRefreshToken(Long userId) {
        Token refreshToken = new Token();
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            refreshToken.setUser(userRepository.findById(userId).get());
            refreshToken.setExpiresIn(Long.toString(refreshTokenDurationMs));
            refreshToken.setRefreshToken(UUID.randomUUID().toString());

            refreshToken = tokenRepository.save(refreshToken);

            return refreshToken;
        }
        return refreshToken;
    }

    public boolean verifyExpiration(Token token) {
        if (token.getExpiresIn().compareTo(Instant.now().toString()) < 0) {
            tokenRepository.delete(token);
            return true;
        }
        return false;
    }

    @Transactional
    public void deleteByUser(User user) {
        tokenRepository.deleteByUser(user);
    }

    public ErrorMessage handleTokenException(JwtException ex) {
        Map<String, String> messages = new HashMap<>();
        if (ex instanceof MalformedJwtException) {
            messages.put("JWT", "Invalid JWT token");
        } else if (ex instanceof ExpiredJwtException) {
            messages.put("JWT", "Invalid JWT token");
        } else if (ex instanceof UnsupportedJwtException) {
            messages.put("JWT", "Invalid JWT token");
        }
        messages.put("JWT", "Invalid JWT token");
        return new ErrorMessage(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                messages,
                "API input description");
    }
}
