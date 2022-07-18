package com.promocion.horizontalback.service.auth;

import com.promocion.horizontalback.config.jwt.JwtTokenHelper;
import com.promocion.horizontalback.config.request.AuthenticationRequest;
import com.promocion.horizontalback.config.request.UserSession;
import com.promocion.horizontalback.dto.auth.UserDto;
import com.promocion.horizontalback.exception.AppException;
import com.promocion.horizontalback.query.UserQuery;
import com.promocion.horizontalback.shared.Messages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthLoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenHelper jwtTokenHelper;

    @Autowired
    private UserQuery userQuery;

    public String authLogin ( AuthenticationRequest authenticationRequest){
        try {
            final Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken( authenticationRequest.getUserName(), authenticationRequest.getPassword() ) );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserSession user=(UserSession) authentication.getPrincipal();
            return jwtTokenHelper.generateToken(user.getUsername());
        }catch (BadCredentialsException exception){
            throw new AppException(Messages.user_wrongPassword);
        }
    }

    public UserDto getUserInfo(UserSession userSession){
        UserDto userDto= new UserDto();
        if (userSession != null) {
            userDto =new UserDto( userQuery.findByUsername( userSession.getUsername()) ) ;
        }

        return userDto;
    }

}
