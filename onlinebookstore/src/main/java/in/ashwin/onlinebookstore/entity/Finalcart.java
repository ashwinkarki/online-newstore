package in.ashwin.onlinebookstore.entity;

public class Finalcart {
	
private Billingaddress	billingAddress;
private Creditcard creditCard;
private Shippingaddress shippingAddress;

public Billingaddress getBillingAddress() {
	return billingAddress;
}
public void setBillingAddress(Billingaddress billingAddress) {
	this.billingAddress = billingAddress;
}
public Creditcard getCreditCard() {
	return creditCard;
}
public void setCreditCard(Creditcard creditCard) {
	this.creditCard = creditCard;
}

 
@Override
public String toString() {
	return "Finalcart [billingAddress=" + billingAddress + ", creditCard=" + creditCard + ", shippingAddress="
			+ shippingAddress + "]";
}
public Finalcart() {
	
}
public Shippingaddress getShippingAddress() {
	return shippingAddress;
}
public void setShippingAddress(Shippingaddress shippingAddress) {
	this.shippingAddress = shippingAddress;
}







}
