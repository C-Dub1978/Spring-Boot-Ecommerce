package site.cswilson.springbootecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import site.cswilson.springbootecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
