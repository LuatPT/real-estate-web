package com.example.luatpt.controller;

import com.example.luatpt.service.token.TokenService;
import com.example.luatpt.utils.ErrorMessage;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class WebControllerAdvice {
    private final String DESCRIPTION = "API input description";

    @Autowired
    private TokenService tokenService;

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleWebValidateException(MethodArgumentNotValidException ex, WebRequest request) {
        Map<String, String> messages = new HashMap<>();
        if (ex.getBindingResult().hasErrors()) {
            ex.getBindingResult().getFieldErrors().forEach(error -> {
                messages.put(error.getField(), error.getDefaultMessage());
            });
        }
        return new ErrorMessage(
                HttpStatus.BAD_REQUEST.value(),
                new Date(),
                messages,
                DESCRIPTION);
    }

    @ExceptionHandler({MalformedJwtException.class, ExpiredJwtException.class, UnsupportedJwtException.class, IllegalArgumentException.class})
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorMessage handleTokenValidateException(JwtException ex, WebRequest request) {
        return tokenService.handleTokenException(ex);
    }
}
