package com.techelevator.dao;

import com.techelevator.model.User;

import java.util.List;

public interface UserDao {

    List<User> findAll();

    User getUserById(int userId);

    User findByUsername(String username);

    int findIdByUsername(String username);

    User updateUser(boolean isAdmin, int id, User user);

    List<User> getApprovedUsers();


    boolean create(String username, String password, String role, String firstName, String lastName,
                   String phoneNumber, String emailAddress);
}
