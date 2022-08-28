package com.example.luatpt.entity;

import com.example.luatpt.utils.AbstractAuditingEntity;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "tokens")
@Data
public class Token extends AbstractAuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User user;

    @Column(length = 250)
    private String refreshToken;

    @Column(length = 64)
    private String expiresIn;
}
