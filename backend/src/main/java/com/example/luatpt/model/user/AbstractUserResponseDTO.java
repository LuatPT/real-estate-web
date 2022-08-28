package com.example.luatpt.model.user;

import lombok.Data;
import org.hibernate.annotations.Formula;

@Data
public abstract class AbstractUserResponseDTO {
    private String firstName;
    private String lastName;
    private String email;
    @Formula(value = "concat(firstName,' ',lastName)")
    private String displayName;
}
