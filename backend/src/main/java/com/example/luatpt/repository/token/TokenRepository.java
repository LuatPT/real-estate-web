package com.example.luatpt.repository.token;

import com.example.luatpt.entity.Token;
import com.example.luatpt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {
    Optional<Token> findByRefreshToken(String refreshToken);

    Optional<Token> findByUser(User userId);

    @Modifying
    int deleteByUser(User user);
}
