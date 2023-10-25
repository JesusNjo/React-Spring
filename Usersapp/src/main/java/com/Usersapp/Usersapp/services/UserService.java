package com.Usersapp.Usersapp.services;


import com.Usersapp.Usersapp.models.UserApp;

import com.Usersapp.Usersapp.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserService  {

    @Autowired
    UserRepository userRepository;

    public void createUser(UserApp u){
        userRepository.save(u);

    }

    public List<UserApp> getAllUsers(){
        return userRepository.findAll();

    }

    public UserApp getById(Long id){
        return userRepository.findById(id).orElse(null);
    }

    public void deleteUser(Long id){
        UserApp u = getById(id);
        userRepository.delete(u);
        log.info("Se ha realizado una operación");
    }

    public void modifyUser(UserApp u){
        UserApp newUser = userRepository.findById(u.getId()).orElse(null);

        newUser.setName(u.getName());
        newUser.setLastname(u.getLastname());
        newUser.setEmail(u.getEmail());
        newUser.setAge(u.getAge());
        newUser.setAddress(u.getAddress());

        userRepository.save(newUser);
        log.info("Se ha realizado una operación");
    }
}
