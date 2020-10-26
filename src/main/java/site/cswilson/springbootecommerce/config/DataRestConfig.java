package site.cswilson.springbootecommerce.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import site.cswilson.springbootecommerce.entity.Product;
import site.cswilson.springbootecommerce.entity.ProductCategory;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {
    private EntityManager em;

    @Autowired
    public DataRestConfig(EntityManager em) {
        this.em = em;
    }

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        HttpMethod[] unsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
        // disable methods for PUT, POST, DELETE for now
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActions));
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActions))
                .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedActions));
        // Expose the id field from ProductCategory entity
        exposeIds(config);
    }

    private void exposeIds(RepositoryRestConfiguration config) {
        // expose ids

        // Get all entity classes from the entity manager, then filter down to ProductCategory entity
        Set<EntityType<?>> entities = em.getMetamodel().getEntities();

        // Create arraylist of entity types
        List<Class> entityClasses = new ArrayList<>();
        for (EntityType type : entities) {
            entityClasses.add(type.getJavaType());
        }
        // Create array from entity types
        Class[] domainTypes = entityClasses.toArray(new Class[0]);
        // Expose the id field for all entities in our array
        config.exposeIdsFor(domainTypes);
    }
}
