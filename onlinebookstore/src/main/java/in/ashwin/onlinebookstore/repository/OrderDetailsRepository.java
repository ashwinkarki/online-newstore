package in.ashwin.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashwin.onlinebookstore.entity.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails,Long> {

}
