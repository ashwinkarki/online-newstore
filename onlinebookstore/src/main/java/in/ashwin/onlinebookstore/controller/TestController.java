package in.ashwin.onlinebookstore.controller;

import java.util.Date;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.ashwin.onlinebookstore.entity.Billingaddress;
import in.ashwin.onlinebookstore.entity.Book;
import in.ashwin.onlinebookstore.entity.CartItem;
import in.ashwin.onlinebookstore.entity.Finalcart;
import in.ashwin.onlinebookstore.entity.Order;
import in.ashwin.onlinebookstore.entity.Shippingaddress;
import in.ashwin.onlinebookstore.entity.User;
import in.ashwin.onlinebookstore.impl.UserDetailsImpl;
import in.ashwin.onlinebookstore.impl.UserDetailsServiceImpl;
import in.ashwin.onlinebookstore.repository.BillingaddressRepository;
import in.ashwin.onlinebookstore.repository.BookRepository;
import in.ashwin.onlinebookstore.repository.CartItemRepository;
import in.ashwin.onlinebookstore.repository.OrderRepository;
import in.ashwin.onlinebookstore.repository.ShippingaddressRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	@Autowired
	UserDetailsServiceImpl userdetailService;
	
	@Autowired
	private OrderRepository orderRep;
	
	@Autowired
	private BookRepository bookrepository;
	
	@Autowired
	private CartItemRepository cartItemRepo;
	

	
	@Autowired
	private BillingaddressRepository billAddressRepo;
	
	@Autowired
	private ShippingaddressRepository shippingAddressRepo;
	
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String userAccess() {
		return "User Content.";
	}

	@GetMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		return "Admin Board.";
	}
	
	@PostMapping("/finalCart")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String finalCart(@RequestBody Finalcart finalCart,HttpServletRequest request) {
		String user=request.getUserPrincipal().getName();
	   System.out.println(user);
	   
	   System.out.println(finalCart);
	
	   UserDetailsImpl userDetails=(UserDetailsImpl)userdetailService.loadUserByUsername(user);
		User u=new User(userDetails.getId(),userDetails.getUsername(),userDetails.getPassword(),userDetails.getEmail());
	 Order ord= orderRep.save(new Order(u,new Date()));
	 System.out.println(ord);
	Billingaddress ba= billAddressRepo.save(new Billingaddress(finalCart.getBillingAddress(),ord));
	System.out.println(ba);
	 
	 Shippingaddress sa=shippingAddressRepo.save(new Shippingaddress(finalCart.getShippingAddress(),ord));
	 System.out.println(sa);
	 
	 finalCart.getCartItem().forEach(s->{
		 Optional<Book> b=bookrepository.findById(Long.valueOf(s.getBookId()).longValue());
		 cartItemRepo.save(new CartItem(s.getName(),s.getImageUrl(),s.getUnitPrice(),s.getQuantity(), b.get()));
	 });
	 
	
	 
	   System.out.println(userDetails.getUsername()+userDetails.getPassword());
		System.out.println("entered here");
		System.out.println(finalCart);
		System.out.println(finalCart.getBillingAddress());
		System.out.println(finalCart.getShippingAddress());
		System.out.println(finalCart.getCreditCard());
		return "null";
	}
}