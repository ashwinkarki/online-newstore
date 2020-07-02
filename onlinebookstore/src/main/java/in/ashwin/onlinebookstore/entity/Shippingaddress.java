package in.ashwin.onlinebookstore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="shippingaddress")
public class Shippingaddress {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	 private String  city;
	private String country;
	private String state;
	private String street;
	private String zipcode;
	
	
	
	@OneToOne
	@JoinColumn(name = "order_id", nullable = false)
	private Order order;
	

	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public Order getOrder() {
		return order;
	}
	public void setOrder(Order order) {
		this.order = order;
	}
	public Shippingaddress(Shippingaddress shp,Order ord) {
		this.city = shp.getCity();
		this.country = shp.getCountry();
		this.state = shp.getState();
		this.street = shp.getStreet();
		this.zipcode = shp.getZipcode();
		this.order=ord;
	}
	public Shippingaddress() {
		
	}
	@Override
	public String toString() {
		return "Shippingaddress [id=" + id + ", city=" + city + ", country=" + country + ", state=" + state
				+ ", street=" + street + ", zipcode=" + zipcode + ", order=" + order + "]";
	}
	
	
	
	
	
	
	
	
}
