package com.example.luatpt.security.payload.response;

import com.example.luatpt.model.user.UserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {
    private UserDTO user;
    private String token;
    private String refreshToken;
}