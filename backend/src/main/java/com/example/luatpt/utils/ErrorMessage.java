package com.example.luatpt.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.Map;

@Data
@AllArgsConstructor
public class ErrorMessage {
    private int status;
    private Date time;
    private Map<String, String> messages;
    private String description;
}
