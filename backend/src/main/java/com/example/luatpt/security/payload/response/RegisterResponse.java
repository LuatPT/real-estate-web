package com.example.luatpt.security.payload.response;

import com.example.luatpt.model.user.AbstractUserResponseDTO;
import lombok.Data;

@Data
public class RegisterResponse extends AbstractUserResponseDTO {
    private Long id;

    public RegisterResponse(Long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.displayName = firstName + " " + lastName;
    }

    private String firstName;
    private String lastName;
    private String email;
    private String displayName;
}
