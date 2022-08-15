CREATE DATABASE market;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE role cascade;
CREATE TABLE role(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    role_name varchar(15) NOT NULL
);

DROP TABLE product_status cascade;
CREATE TABLE product_status(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    name varchar(15) NOT NULL,
    name_uz varchar(15) NOT NULL
);

DROP TABLE site cascade;
CREATE TABLE site(
    phone_number varchar(20) NOT NULL,
    address varchar(150) NOT NULL,
    address_uz varchar(150) NOT NULL,
    work_time varchar(150) NOT NULL,
    work_uz_time varchar(150) NOT NULL,
    telegram_link varchar(150) NOT NULL,
    instagram_link varchar(150) NOT NULL
);

DROP TABLE category cascade;
CREATE TABLE category(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    name varchar(15) NOT NULL,
    name_uz varchar(77) NOT NULL,
    state boolean default true,
    status boolean default true
);

DROP TABLE users cascade;
CREATE TABLE users(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    user_firstname varchar(15) NOT NULL,
    user_lastname varchar(77) NOT NULL,
    username varchar(15) unique NOT NULL,
    user_password text unique NOT NULL,
    role_id uuid REFERENCES role(id),
    user_status boolean default true
);

DROP TABLE product cascade;
CREATE TABLE product(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    category_id uuid REFERENCES category(id),
    picture_link varchar(50) NOT NULL,
    price  numeric(10) NOT NULL,
    sale_price numeric(10),
    quantity numeric(10) NOT NULL,
    frame varchar(15) NOT NULL,
    frame_uz varchar(15) NOT NULL,
    size numeric(5, 2) NOT NULL,
    depth numeric(3) NOT NULL,
    state boolean default true,
    status_id uuid REFERENCES product_status(id),
    equipment varchar(150),
    equipment_uz varchar(150)
);

DROP TABLE orders cascade;
CREATE TABLE orders(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    product_id uuid REFERENCES product(id),
    name varchar(15) NOT NULL,
    phone_number varchar(13) NOT NULL,
    address varchar(150) NOT NULL,
    location point,
    time_order timestamp with time zone NOT NULL default current_timestamp,
    state boolean default true,
    status boolean default false 
);


DROP TABLE consultations cascade;
CREATE TABLE consultations(
    id uuid NOT NULL default uuid_generate_v4() PRIMARY KEY,
    name varchar(20) NOT NULL,
    phone_number varchar(20) NOT NULL,
    time timestamp with time zone NOT NULL default current_timestamp,
    status boolean DEFAULT false,
    state boolean DEFAULT true
);