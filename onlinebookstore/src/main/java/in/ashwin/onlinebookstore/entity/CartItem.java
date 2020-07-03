package in.ashwin.onlinebookstore.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="tbl_cart_item")
public class CartItem {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String name;
private String imageUrl;
private int unitPrice;
private int quantity;

@Transient
private String bookId;

@OneToOne
@JoinColumn(name = "book_id", nullable = false)
private Book book;

public CartItem(String name, String imageUrl, int unitPrice, int quantity,Book b) {
	
	
	this.name = name;
	this.imageUrl = imageUrl;
	this.unitPrice = unitPrice;
	this.quantity = quantity;
	this.book=b;
}

public CartItem() {
	
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public Book getBook() {
	return book;
}

public void setBook(Book book) {
	this.book = book;
}

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getImageUrl() {
	return imageUrl;
}
public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
}
public int getUnitPrice() {
	return unitPrice;
}
public void setUnitPrice(int unitPrice) {
	this.unitPrice = unitPrice;
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public String getBookId() {
	return bookId;
}

public void setBookId(String bookId) {
	this.bookId = bookId;
}



}
