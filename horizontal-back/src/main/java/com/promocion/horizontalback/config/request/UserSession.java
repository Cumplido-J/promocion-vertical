package com.promocion.horizontalback.config.request;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.promocion.horizontalback.entity.user.User;
import com.promocion.horizontalback.shared.AppFunctions;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class UserSession implements UserDetails {

    private Integer id;
    private String name;
    private String username;
    private String email;

    @JsonIgnore
    private String password;
    private int status;

    private Collection<? extends GrantedAuthority > authorities;

    public UserSession(Integer id, String name, String username, String password, String email, Collection<? extends GrantedAuthority> authorities, int status) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.status=status;
    }

    public static UserSession create( User user) {

        List<GrantedAuthority> authorities = user.getUserRoles().stream()
                .map(userRole -> {
                    return new SimpleGrantedAuthority(userRole.getRole().getName()) ;
                }).collect(Collectors.toList());


        String fullName = AppFunctions.fullName(user.getName(), user.getFirstLastName(), user.getSecondLastName());
        return new UserSession(user.getId(), fullName, user.getUsername(), user.getPassword(), user.getEmail(), authorities,user.getStatus());
    }

    @Override
    public Collection< ? extends GrantedAuthority > getAuthorities() {
        return this.authorities;
    }

    /*@Override
    public String getPassword() {
        return this.password;
    }*/

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.status==1;
        //return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
