package in.ashwin.onlinebookstore.repository;

import org.springframework.data.domain.Pageable;




import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;

import in.ashwin.onlinebookstore.entity.Book;

//@CrossOrigin("http://localhost:4200")
@Secured("permitAll")
public interface BookRepository extends JpaRepository<Book,Long> {

	@RestResource(path = "categoryid")
	Page<Book>	findByCategoryId(@Param("id") Long id,Pageable pageable);
	
	//to get book by searching
	@RestResource(path = "searchbykeyword")
	Page<Book>	findByNameContaining(@Param("xyz") String keyword,Pageable pageable);
}
