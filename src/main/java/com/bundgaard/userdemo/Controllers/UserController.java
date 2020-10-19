package com.bundgaard.userdemo.Controllers;


import com.bundgaard.userdemo.Models.User;
import com.bundgaard.userdemo.Service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private UserService users = new UserService();

    @PostMapping("api/userservice")
    public ResponseEntity<UserService> getSearchResults(){
        System.out.println("api/userservice kaldt med: ");

        return ResponseEntity.ok(users);
    }

    @PostMapping("api/createuser")
    public ResponseEntity<UserService> createUser(@RequestBody User user){
        System.out.println("api/createuser kaldt med ");
        users.addUser(user.username);
        return ResponseEntity.ok(users);
    }

}