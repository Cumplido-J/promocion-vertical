package com.promocion.horizontalback.query;


import com.promocion.horizontalback.entity.user.User;
import com.promocion.horizontalback.exception.AppException;
import com.promocion.horizontalback.repository.UserRepository;
import com.promocion.horizontalback.shared.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserQuery {

    @Autowired
    private UserRepository userRepository;



    public User findByUsername( String username){

        return userRepository.findByUsername(username).orElseThrow( () -> new AppException(Messages.theUserDoesNotExist) ) ;
    }
}
