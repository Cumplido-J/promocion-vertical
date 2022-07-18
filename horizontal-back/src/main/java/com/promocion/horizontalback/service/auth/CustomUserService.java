package com.promocion.horizontalback.service.auth;

import com.promocion.horizontalback.config.request.UserSession;
import com.promocion.horizontalback.entity.user.User;
import com.promocion.horizontalback.query.UserQuery;
import com.promocion.horizontalback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserQuery userQuery;


    @Transactional
    public UserDetails loadUserByUsername( String username ) throws UsernameNotFoundException {
        User user = userQuery.findByUsername(username);
            /*if (null == user) {
                throw new UsernameNotFoundException("Usuario no encontrado: "+ username);
            }*/
        return UserSession.create(user);
    }

}
