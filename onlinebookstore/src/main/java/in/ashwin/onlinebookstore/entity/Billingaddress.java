package in.ashwin.onlinebookstore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Billingaddress {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String city;
	private String country;
	private String state;
	private String street;
	private String zipcode;
	
	@OneToOne
	@JoinColumn(name = "order_id", nullable = false)
	private Order order;
	
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	
	public Billingaddress() {
		
	}
	
public Billingaddress(Billingaddress ba, Order ord) {
	
	this.city = ba.getCity();
	this.country = ba.getCountry();
	this.state = ba.getState();
	this.street = ba.getStreet();
	this.zipcode = ba.getZipcode();
	this.order=ord;
	
	}
	
	

	@Override
	public String toString() {
		return "Billingaddress [city=" + city + ", country=" + country + ", state=" + state + ", street=" + street
				+ ", zipcode=" + zipcode + "]";
	}
	
	
}
