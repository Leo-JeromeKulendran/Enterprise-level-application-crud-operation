package com.ead.springbootbackend.controller;

import com.ead.springbootbackend.exception.ResourceNotFoundException;
import com.ead.springbootbackend.model.Rooms;
import com.ead.springbootbackend.repository.RoomsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/rooms")
public class RoomsController {

	@Autowired
	private RoomsRepository roomsRepository;

	// get all rooms
	@GetMapping("/list")
	public List<Rooms> getAllRooms(){
		return roomsRepository.findAll();
	}

	// create rooms rest api
	@PostMapping("/create")
	public Rooms createRooms(@RequestBody Rooms rooms) {
		return roomsRepository.save(rooms);
	}

	// get rooms by id rest api
	@GetMapping("/view/{id}")
	public ResponseEntity<Rooms> getRoomsById(@PathVariable Long id) {
		Rooms rooms = roomsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("rooms not exist with id :" + id));
		return ResponseEntity.ok(rooms);
	}

	// update rooms rest api

	@PutMapping("/update/{id}")
	public ResponseEntity<Rooms> updateRooms(@PathVariable Long id, @RequestBody Rooms roomsDetails){
		Rooms rooms = roomsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rooms not exist with id :" + id));

		rooms.setRoomNo(roomsDetails.getRoomNo());
		rooms.setRoomType(roomsDetails.getRoomType());
		rooms.setNo_ofPerson(roomsDetails.getNo_ofPerson());

		Rooms updatedRooms = roomsRepository.save(rooms);
		return ResponseEntity.ok(updatedRooms);
	}

	// delete rooms rest api
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteRooms(@PathVariable Long id){
		Rooms rooms = roomsRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rooms not exist with id :" + id));

		roomsRepository.delete(rooms);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}
