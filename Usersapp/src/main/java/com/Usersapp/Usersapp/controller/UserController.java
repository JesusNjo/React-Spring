package com.Usersapp.Usersapp.controller;


import com.Usersapp.Usersapp.models.UserApp;
import com.Usersapp.Usersapp.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {


    @Autowired
    UserService userService;



   @GetMapping
    public ResponseEntity<List<UserApp>> getAllUsers(){
       List allUsers = userService.getAllUsers();

       if(allUsers.isEmpty()){
           return ResponseEntity.noContent().build();
       }else{
           return ResponseEntity.ok(allUsers);
       }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserApp> getById(@PathVariable("id") Long id){
        UserApp user = userService.getById(id);

        if(user == null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok(user);
        }
    }

    @PostMapping
    public ResponseEntity<UserApp> createUser(@RequestBody UserApp user){
        userService.createUser(user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserApp> deleteUser(@PathVariable("id") Long id){
        UserApp u = userService.getById(id);

        if(u== null){
            return ResponseEntity.notFound().build();
        }else{
            userService.deleteUser(u.getId());
            return ResponseEntity.ok(u);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserApp> modifyUser(@RequestBody UserApp u, @PathVariable("id") Long id){
        UserApp newU = userService.getById(id);

        System.out.printf(newU.toString()+ "hola");
        if(newU == null){
            return ResponseEntity.notFound().build();
        }else{
            u.setId(id);
            userService.modifyUser(u);
            return ResponseEntity.ok(u);
        }

    }
}
