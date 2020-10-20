package site.cswilson.springbootecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import site.cswilson.springbootecommerce.entity.ProductCategory;

// The collectionResouceRel is the actual JSON entry for REST ops
// The path will be /product-category on the app
@RepositoryRestResource(collectionResourceRel = "productCategory", path = "product-category")
@CrossOrigin("http://localhost:4200")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
}
