package in.ashwin.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;

import in.ashwin.onlinebookstore.entity.BookCategory;

//@CrossOrigin("http://localhost:4200") it has been configured from config
@RepositoryRestResource(collectionResourceRel = "bookCategory",path="book-category")
@Secured("permitAll")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
