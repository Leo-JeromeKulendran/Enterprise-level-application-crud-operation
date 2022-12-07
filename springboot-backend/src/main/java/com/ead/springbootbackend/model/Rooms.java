package com.ead.springbootbackend.model;

import javax.persistence.*;

@Entity
@Table(name = "rooms")
public class Rooms {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "room_no")
	private String roomNo;

	@Column(name = "room_type")
	private String roomType;

	@Column(name = "no_of_person")
	private String no_ofPerson;

	public Rooms() {

	}

	public Rooms(String roomNo, String roomType, String no_ofPerson) {
		super();
		this.roomNo = roomNo;
		this.roomType = roomType;
		this.no_ofPerson = no_ofPerson;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(String roomNo) {
		this.roomNo = roomNo;
	}
	public String getRoomType() {return roomType;}
	public void setRoomType(String roomType) {this.roomType = roomType;}
	public String getNo_ofPerson() {
		return no_ofPerson;
	}
	public void setNo_ofPerson(String no_ofPerson) {
		this.no_ofPerson = no_ofPerson;
	}
}
