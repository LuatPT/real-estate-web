package com.example.luatpt.utils;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CommonException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public CommonException(String cause, String message) {
        super(String.format("Failed for [%s]: %s", cause, message));
    }
}