package com.promocion.horizontalback.dto.auth;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.promocion.horizontalback.entity.user.Role;
import com.promocion.horizontalback.entity.user.User;
import com.promocion.horizontalback.entity.user.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    @JsonInclude( JsonInclude.Include.NON_NULL)
    private Integer id;

    @JsonInclude( JsonInclude.Include.NON_NULL)
    private String email;

    @JsonInclude( JsonInclude.Include.NON_NULL)
    private String username;

    @JsonInclude( JsonInclude.Include.NON_NULL )
    private String password;

    @JsonInclude( JsonInclude.Include.NON_NULL)
    private String name;

    @JsonInclude( JsonInclude.Include.NON_NULL)
    private String firstLastName;

    @JsonInclude( JsonInclude.Include.NON_NULL)
    //@JsonInclude(JsonInclude.Include.ALWAYS)
    private String secondLastName;

    @JsonInclude( JsonInclude.Include.NON_DEFAULT)
    private int status;

    @JsonInclude( JsonInclude.Include.NON_DEFAULT)
    private Set<String> role;

    public UserDto ( User user){
        this.id = user.getId();
        this.username = getUsername();
        this.name = user.getName();
        this.firstLastName = user.getFirstLastName();
        this.secondLastName = user.getSecondLastName();
        this.role = user.getUserRoles().stream().map(UserRole::getRole).map(Role::getName).collect(Collectors.toSet());
    }
}
