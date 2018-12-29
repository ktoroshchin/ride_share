CREATE TABLE drivers (
  id serial primary key,
  first_name varchar(150),
  last_name varchar(150),
  password varchar(150),
  vehicle_type varchar(150),
  email varchar(150),
  created_at timestamp without time zone default current_timestamp);

CREATE TABLE reservations (
  first_name varchar(150),
   phone_number varchar(150),
   departure_date varchar(150),
   departure_time varchar(150),
   number_of_people varchar(150),
   is_confirmed set default false,
   message varchar(1000),
   driver_name varchar(150),
   driver_id varchar(150),
   created_at timestamp without time zone default current_timestamp);



   connect to heroku: heroku login
   connect to DB: heroku pg:psql