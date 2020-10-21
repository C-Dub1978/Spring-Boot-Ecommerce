package site.cswilson.springbootecommerce.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product_category")
// @Data - known bug, when you are using JPA relational mappings like one to many, etc
// user getter and setter instead to generate getters/setters instead of @Data
@Getter
@Setter
public class ProductCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "category_name")
    private String categoryName;
    // One category can have many products, this is the JPA relation defined
    // Keep in mind - the mapped by is pointing to the class level name of the field, not the
    // actual table/field name
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<Product> products;
}
