package com.bundgaard.userdemo.Models;

public class User {
    public String username;

    public User(String user) {
        this.username = user;
    }

    public User() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


}
