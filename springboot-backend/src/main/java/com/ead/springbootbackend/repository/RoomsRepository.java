package com.ead.springbootbackend.repository;


import com.ead.springbootbackend.model.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoomsRepository extends JpaRepository<Rooms, Long>{

}
