-- MySQL Script generated by MySQL Workbench
-- Fri Jan 17 09:47:09 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema storeapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema storeapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS 'storeapp' DEFAULT CHARACTER SET utf8 ;
USE 'storeapp' ;

-- -----------------------------------------------------
-- Table 'storeapp'.'TempUsers'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'storeapp'.'TempUsers' (
  'idTempUser' INT NOT NULL AUTO_INCREMENT,
  'dateCreated' DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  'KeyUser' VARCHAR(200) NULL,
  PRIMARY KEY ('idTempUser'))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table 'storeapp'.'Categorias'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'storeapp'.'Categorias' (
  'idCategoria' INT NOT NULL AUTO_INCREMENT,
  'nameIcon' VARCHAR(200) NOT NULL,
  'nameCat' VARCHAR(45) NULL,
  PRIMARY KEY ('idCategoria'))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table 'storeapp'.'Productos'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'storeapp'.'Productos' (
  'IdProducto' INT NOT NULL AUTO_INCREMENT,
  'Nombre' VARCHAR(200) NULL,
  'ImagenName' VARCHAR(200) NULL,
  'CategoriaId' INT NULL,
  'Precio' INT NULL,
  PRIMARY KEY ('IdProducto'))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table 'storeapp'.'Carrito'
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS 'storeapp'.'Carrito' (
  'IdItem' INT NOT NULL AUTO_INCREMENT,
  'ProductoId' INT NULL,
  'Cantdad' INT NULL,
  'TempUserId' VARCHAR(200) NOT NULL,
  PRIMARY KEY ('IdItem'))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
