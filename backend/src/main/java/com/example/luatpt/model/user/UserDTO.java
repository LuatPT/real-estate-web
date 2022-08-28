package com.example.luatpt.model.user;

import lombok.Data;

@Data
public class UserDTO extends AbstractUserResponseDTO {
    public UserDTO(String firstName, String lastName, String email) {
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setDisplayName(firstName + " " + lastName);
    }
}
