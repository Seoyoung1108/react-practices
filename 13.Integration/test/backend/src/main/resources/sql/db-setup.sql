-- create table
CREATE TABLE IF NOT EXISTS `vehicle` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vehicle_number` VARCHAR(45) NOT NULL,
  `vehicle_in_datetime` VARCHAR(45) NOT NULL,
  `vehicle_out_datetime` VARCHAR(45) NOT NULL,
  `driver_name` VARCHAR(45) NOT NULL,
  `driver_birth` VARCHAR(10) NOT NULL,
  `driver_phone_number` VARCHAR(20) NOT NULL,
  `is_approved` ENUM('Y', 'N') NOT NULL DEFAULT 'N',
  `staff_name` VARCHAR(45) NOT NULL,
  `staff_from` VARCHAR(45) NOT NULL,
  `staff_phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- insert vehicle
insert into vehicle values(null, '123마 4567', '2025.02.21 00:00:00', '2025.02.22 00:00:00', '김미영', '990123', '010-1111-1111', 'Y', '이동혁', 'Smart Factory', '010-2345-1421');
insert into vehicle values(null, '999하 9999', '2025.02.26 00:00:00', '2025.02.29 00:00:00', '김미영', '990123', '010-1111-1111', 'N', '이동혁', 'Smart Factory', '010-2345-1421');
insert into vehicle values(null, '88나 3354', '2025.02.26 00:00:00', '2025.02.26 00:00:00', '김미영', '990123', '010-1111-1111', 'N', '이동혁', 'Smart Factory', '010-2345-1421');
insert into vehicle values(null, '123바 9873', '2025.03.21 00:00:00', '2025.03.22 00:00:00', '김미영', '990123', '010-1111-1111', 'Y', '이동혁', 'Smart Factory', '010-2345-1421');
