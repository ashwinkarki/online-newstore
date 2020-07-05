package in.ashwin.onlinebookstore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="tbl_order_details")
public class OrderDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	@JoinColumn(name = "cart_id", nullable = false)
	private CartItem carItem;
	
	@ManyToOne
	@JoinColumn(name = "order_id", nullable = false)
	private Order order;

	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CartItem getCarItem() {
		return carItem;
	}

	public void setCarItem(CartItem carItem) {
		this.carItem = carItem;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public OrderDetails() {
	
	}

	public OrderDetails(CartItem carItem, Order order) {
		
		this.id = id;
		this.carItem = carItem;
		this.order = order;
	}
	
	
	
	

}
