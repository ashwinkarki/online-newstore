package in.ashwin.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashwin.onlinebookstore.entity.Order;


public interface OrderRepository extends JpaRepository<Order, Long>  {

}
