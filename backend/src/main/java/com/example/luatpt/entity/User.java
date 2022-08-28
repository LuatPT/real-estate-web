package com.example.luatpt.entity;

import com.example.luatpt.utils.AbstractAuditingEntity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class User extends AbstractAuditingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(length = 30)
    private String firstName;

    @Column(length = 30)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(length = 250)
    private String password;

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}