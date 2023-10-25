package com.Usersapp.Usersapp.repository;




import com.Usersapp.Usersapp.models.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository

public interface UserRepository extends JpaRepository<UserApp,Long> {

}
