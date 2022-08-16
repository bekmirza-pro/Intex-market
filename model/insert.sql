insert into role (role_name) values ('super-admin'), ('stuff'), ('admin'); 

insert into product_status (name, name_uz) values 
('Рекомендовано', 'Tavsiya etiladi'), 
('Скидка', 'Chegirmada'), 
('Нет в продаже', 'Sotuvda yo''q'),
('Пустой', 'Bo''sh'); 

insert into category(name, name_uz) values 
('Каркасные', 'Karkasli'), 
('Надувные', 'Shishiladigan');

insert into site
( phone_number, 
  address, 
  address_uz,
  work_time,
  work_uz_time, 
  telegram_link, 
  instagram_link ) 
values 
( '(998) 99 911 02 04', 
  'Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент', 
  'Toshkent shahri, Yashnobod tumani, Paxlavon Mahmud ko‘chasi',
  'Будние дни: 10:00 - 22:00 Без выходных',
  'Ish kunlari: 10:00 - 22:00. Haftada etti kun',
  'https://www.telegram.com/intex-market_uz/',
  'https://www.instagram.com/intex-market_uz/' 
);

truncate table role;
insert into role(role_name) values 
('super-admin'), 
('admin'), 
('stuff'); 


insert into users
(
  user_firstname,
  user_lastname,
  username,
  user_password,
  role_id
) values 
('Ali', 'Sur''atov', 'theekoff', '$2b$10$MQuOCgkO7trRoE6y0obHeevk5WHEelGaPd/eEWiOze8NTWQWnAecS', '27958039-af2a-4b59-a2a3-3a3fe7694fef');

UPDATE users
SET password = '$2b$10$MQuOCgkO7trRoE6y0obHeevk5WHEelGaPd/eEWiOze8NTWQWnAecS' 
WHERE id = '224b8bbd-259e-4833-93fe-10f3ff8a8bbb';


INSERT INTO users
(
  user_firstname,
  user_lastname,
  username,
  user_password,
  role_id
) VALUES ($1, $2, $3, $4, $5) 
RETURNING 
  user_id AS id,
  user_firstname AS first_name,
  user_lastname AS last_name;

INSERT INTO users
(
  user_firstname,
  user_lastname,
  username,
  user_password,
  role_id
) VALUES ('Ali', 'Sur''atov', 'theekoff', '$2b$10$MQuOCgkO7trRoE6y0obHeevk5WHEelGaPd/eEWiOze8NTWQWnAecS', '52b57078-5168-4725-a3e0-181bcb1929a3')
RETURNING 
  id,
  user_firstname AS first_name,
  user_lastname AS last_name;


INSERT INTO product ( category_id, picture_link, price, sale_price, quantity, frame, frame_uz, size, depth, status_id, equipment, equipment_uz ) values 
('c059e455-04db-41f0-8c91-a5f81c826479', '/img/image2134564778.jpg', 1582000, 1250000, 10, 'Прямоугольная', 'To''rtburchak', 1.34, 21, '05ab41b7-c993-4ff0-8d11-d364e432d1e4', 'Baseyn va karkastlari', 'Бассейн и рамки' );

INSERT INTO orders ( product_id, name, phone_number, address, location) VALUES
( 'e8bb3744-9221-485b-aff4-c282661c5add', 'Sarvar', '99 6071899', 'Yunusobod 15 Bog''ishamol ko''chasi  5-uy', '-122.0574,37.4192');


SELECT 
  id,
  category_id,
  picture_link,
  price,
  sale_price,
  quantity,
  frame,
  frame_uz,
  size,
  depth,
  state,
  ps.name status_name,
  ps.name_uz status_name_uz,
  equipment,
  equipment_uz
FROM product p 
LEFT JOIN (SELECT id product_s, name, name_uz from product_status) ps ON ps.product_s = p.status_id
WHERE id = '21437de8-5bdb-4bdc-a00a-7a4e96b88b4b';



INSERT INTO orders ( product_id, name, phone_number, address, location) VALUES
( '21437de8-5bdb-4bdc-a00a-7a4e96b88b4b', 'Nodir', '99 6071899', 'Yunusobod 15 Bog''ishamol ko''chasi  5-uy', '-122.0574,37.4192');
