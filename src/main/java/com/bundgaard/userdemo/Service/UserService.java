package com.bundgaard.userdemo.Service;

import com.bundgaard.userdemo.Models.User;

import java.util.ArrayList;
import java.util.List;

public class UserService {

    public List<User> users = new ArrayList<>();


    public void addUser(String user) {
        users.add(new User(user));
    }
}