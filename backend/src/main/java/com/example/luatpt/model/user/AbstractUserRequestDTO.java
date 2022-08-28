package com.example.luatpt.model.user;

import lombok.Data;;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Data
public abstract class AbstractUserRequestDTO {
    @NotBlank
    @Email(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$", message = "Email not valid !")
    private String email;

    @NotBlank
    @Length(min = 8, max = 20, message = "Password must be 8-20 characters!")
    private String password;
}
