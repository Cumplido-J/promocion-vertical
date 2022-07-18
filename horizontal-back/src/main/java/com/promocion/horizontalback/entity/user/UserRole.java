package com.promocion.horizontalback.entity.user;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "usuario_rol")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;

    @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = "usuario_id") private User user;
    @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = "rol_id") private Role role;

    public UserRole(User user, Role role) {
        this.role = role;
        this.user = user;
    }
}
