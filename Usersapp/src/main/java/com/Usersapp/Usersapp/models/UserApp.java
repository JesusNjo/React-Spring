package com.Usersapp.Usersapp.models;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table
@Builder
public class UserApp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Long id;

    @NonNull
    private String name;

    @Column(name = "last_name")
    @NonNull
    private String lastname;

    @NonNull
    private int age;

    @NonNull
    private String email;

    @NonNull
    private String address;
}
