package in.ashwin.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashwin.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book,Long> {

}
