package com.example.luatpt.security.payload.request;

import com.example.luatpt.model.user.AbstractUserRequestDTO;
import lombok.Data;

@Data
public class RegisterRequest extends AbstractUserRequestDTO {
    private String firstName;
    private String lastName;
}
