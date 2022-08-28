package com.example.luatpt.service.user;

import com.example.luatpt.model.user.CustomUserDetails;
import com.example.luatpt.entity.User;
import com.example.luatpt.model.user.UserDTO;
import com.example.luatpt.repository.user.UserRepository;
import com.example.luatpt.security.payload.response.LoginResponse;
import com.example.luatpt.security.payload.request.RegisterRequest;
import com.example.luatpt.security.payload.response.RegisterResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(email);
        }
        return new CustomUserDetails(user);
    }

    @Transactional
    public User loadUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException(email);
        }
        return user;
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + id)
        );
        return new CustomUserDetails(user);
    }

    @Transactional
    public RegisterResponse registerUser(RegisterRequest request) {
        RegisterResponse response = null;
        User userDTO = userRepository.findByEmail(request.getEmail());
        String encodedPassword = new BCryptPasswordEncoder().encode(request.getPassword());
        if (userDTO == null) {
            //will change to mapper if scale
            User newUser = new User(request.getFirstName(), request.getLastName(), request.getEmail(), encodedPassword);
            userRepository.save(newUser);
            User newUserCreated = userRepository.findByEmail(request.getEmail());
            response = new RegisterResponse(newUserCreated.getId(), newUserCreated.getFirstName(), newUserCreated.getLastName(), newUserCreated.getEmail());
        }
        return response;
    }

    public LoginResponse buildLoginResponse(User user, String accessToken, String refreshToken) {
        LoginResponse response = new LoginResponse();
        UserDTO userDTO = new UserDTO(user.getFirstName(), user.getLastName(), user.getEmail());
        response.setUser(userDTO);
        response.setToken(accessToken);
        response.setRefreshToken(refreshToken);
        return response;
    }
}