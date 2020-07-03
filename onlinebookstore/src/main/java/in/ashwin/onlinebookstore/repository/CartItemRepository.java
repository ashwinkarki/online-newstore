package in.ashwin.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashwin.onlinebookstore.entity.CartItem;

public interface CartItemRepository  extends JpaRepository<CartItem, Long>{

}
