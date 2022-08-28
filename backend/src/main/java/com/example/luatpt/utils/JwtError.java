package com.example.luatpt.utils;

import io.jsonwebtoken.MalformedJwtException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum JwtError {
    INVALID_TOKEN(MalformedJwtException.class, "Invalid JWT token", HttpStatus.BAD_REQUEST.value()),
    EXPIRED_TOKEN(MalformedJwtException.class, "Expired JWT token", HttpStatus.BAD_REQUEST.value()),
    UNSUPPORTED_TOKEN(MalformedJwtException.class, "Unsupported JWT token", HttpStatus.BAD_REQUEST.value());
    private Class classException;
    private String message;
    private int status;
}
