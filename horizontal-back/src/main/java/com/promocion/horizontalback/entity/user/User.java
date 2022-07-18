package com.promocion.horizontalback.entity.user;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuario")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;
    @Column(name = "email") private String email;
    @Column(name = "username") private String username;
    @Column(name = "password") private String password;
    @Column(name = "nombre") private String name;
    @Column(name = "primerApellido") private String firstLastName;
    @Column(name = "segundoApellido") private String secondLastName;
    @Column(name = "estatus") private int status;


    @OneToMany(mappedBy = "user")
    Set<UserRole> userRoles;
}
