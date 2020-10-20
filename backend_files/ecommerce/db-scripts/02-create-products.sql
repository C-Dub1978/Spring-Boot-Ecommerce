-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product_category` (
  `ID` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `CATEGORY_NAME` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product` (
  `ID` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `SKU` VARCHAR(255) DEFAULT NULL,
  `NAME` VARCHAR(255) DEFAULT NULL,
  `DESCRIPTION` VARCHAR(255) DEFAULT NULL,
  `UNIT_PRICE` DECIMAL(13,2) DEFAULT NULL,
  `IMAGE_URL` VARCHAR(255) DEFAULT NULL,
  `ACTIVE` BIT DEFAULT 1,
  `UNITS_IN_STOCK` INT(11) DEFAULT NULL,
   `DATE_CREATED` DATETIME(6) DEFAULT NULL,
  `LAST_UPDATED` DATETIME(6) DEFAULT NULL,
  `CATEGORY_ID` BIGINT(20) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_category` (`CATEGORY_ID`),
  CONSTRAINT `fk_category` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `product_category` (`ID`)
) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

INSERT INTO product_category(CATEGORY_NAME) VALUES ('BOOKS');

INSERT INTO product (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID,DATE_CREATED)
VALUES ('BOOK-TECH-1000', 'JavaScript - The Fun Parts', 'Learn JavaScript',
'assets/images/products/theFunParts.jpeg'
,1,100,19.99,1, NOW());

INSERT INTO product (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1001', 'Spring Framework Tutorial', 'Learn Spring',
'assets/images/products/spring.jpg'
,1,100,29.99,1, NOW());

INSERT INTO product (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1002', 'Kubernetes - Deploying Containers', 'Learn Kubernetes',
'assets/images/products/kubernetes.jpeg'
,1,100,24.99,1, NOW());

INSERT INTO product (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1003', 'Internet of Things (IoT) - Getting Started', 'Learn IoT',
'assets/images/products/iot.jpg'
,1,100,29.99,1, NOW());

INSERT INTO product (SKU, NAME, DESCRIPTION, IMAGE_URL, ACTIVE, UNITS_IN_STOCK,
UNIT_PRICE, CATEGORY_ID, DATE_CREATED)
VALUES ('BOOK-TECH-1004', 'The Go Programming Language: A to Z', 'Learn Go',
'assets/images/products/golang.jpg'
,1,100,24.99,1, NOW());
