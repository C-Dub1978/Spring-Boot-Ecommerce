package site.cswilson.springbootecommerce.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import site.cswilson.springbootecommerce.entity.Product;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Page and Pageable provide support for pagination!
    // Page is a sublist of a list - so if we have 1000 products, we can filter to return a Page object with a sublist
    // Pageable is an interface that provides pagination information, such as pageNumber, pageSize, previous, next, etc
    // Page and Pageable are automatically created by Spring data REST behind the scenes
    // Any method starting with findBy, readBy, queryBy, will automatically be available at /search/<queryMethodName>
    Page<Product> findByCategoryId(@RequestParam("id") Long id, Pageable page);
}
