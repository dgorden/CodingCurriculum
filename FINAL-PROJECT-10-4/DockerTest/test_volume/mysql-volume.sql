CREATE TABLE `Customer`
(
  `Customer_ID` INT
(50) AUTO_INCREMENT,
  `Customer_Name` VARCHAR
(255) NOT NULL,
  `Email` VARCHAR
(255) NOT NULL,
  `Phone` VARCHAR
(20) NOT NULL,
  `Pref_Contact` VARCHAR
(10) NOT NULL,
  `Discovery_Methods` VARCHAR
(50) NOT NULL,
  `Customer_Comments` VARCHAR
(2000) NOT NULL,
  PRIMARY KEY
(`Customer_ID`)
);

CREATE TABLE `Products`
(
  `Product_ID` INT
(50) AUTO_INCREMENT,
  `Product_Name` VARCHAR
(255) NOT NULL,
  `Product_Description` VARCHAR
(1000) NOT NULL,
  `Price` INT
(255) NOT NULL,
  `Stock` INT
(255) NOT NULL,
  `Main_photo` VARCHAR
(255) NOT NULL,
  -- `Second_photo` VARCHAR(255) NOT NULL,
  -- `Third_photo` VARCHAR(255) NOT NULL,
  -- `Fourth_photo` VARCHAR(255) NOT NULL,
  `Face_Style` VARCHAR
(255) NOT NULL,
  `Case_Material` VARCHAR
(255) NOT NULL,
  `Band_Material` VARCHAR
(255) NOT NULL,
  `Color` VARCHAR
(255) NOT NULL,
`Featured` VARCHAR(255) NOT NULL,
  PRIMARY KEY
(`Product_ID`)
);

-- CREATE TABLE `Orders` (
--   `Order Number` INT(255),
--   `Customer_ID` INT(50) NOT NULL,
--   `Product_ID` INT(50) NOT NULL,
--   PRIMARY KEY (`Order Number`),
--   KEY `FK` (`Customer_ID`, `Product_ID`)
-- );

INSERT INTO Products
  (
  Product_Name, Product_Description, Price, Stock, Main_photo, Face_Style, Case_Material, Band_Material, Color, Featured)
VALUES
  ('Classic Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 299, 1, '/resources/img/black-white-1.jpg', 'Classic WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black', 'Featured'),
  ('Classic Leather DVRK', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 399, 1, '/resources/img/black-white-3.jpg', 'Dark WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black', 'Featured'),
  ('Marble Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 499, 1, '/resources/img/marble-1.jpg', 'Marble WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black', 'Featured'),
  ('Wood Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 299, 1, '/resources/img/wood-watch-1.jpg', 'Special Edition WVTCH Face', 'Maple Enclosure', 'Premium Leather Band', 'Black', 'Not Featured'),
  ('Classic Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 299, 1, '/resources/img/black-white-1.jpg', 'Classic WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black','Not Featured'),
  ('Classic Leather DVRK', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 399, 1, '/resources/img/black-white-3.jpg', 'Dark WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black', 'Not Featured'),
  ('Marble Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 499, 1, '/resources/img/marble-1.jpg', 'Marble WVTCH Face', 'Stainless Steel Enclosure', 'Premium Leather Band', 'Black', 'Not Featured'),
  ('Wood Leather', 'Lorem ipsum dolor amet ennui green juice viral, ugh sriracha kitsch ethical hella readymade. Poutine pabst bespoke everyday carry godard vegan food truck tacos listicle, activated charcoal squid thundercats la croix scenester next level. Cred chartreuse marfa, pinterest vaporware distillery chia typewriter pork belly keffiyeh vegan pour-over tumblr everyday carry deep v. Succulents hot chicken artisan DIY biodiesel pour-over, irony church-key. Hella unicorn meggings blue bottle kinfolk artisan, shaman man bun taxidermy tousled. Scenester put a bird on it XOXO, waistcoat photo booth gastropub artisan mixtape af.', 299, 1, '/resources/img/wood-watch-1.jpg', 'Special Edition WVTCH Face', 'Maple Enclosure', 'Premium Leather Band', 'Black', 'Not Featured')
  ;

