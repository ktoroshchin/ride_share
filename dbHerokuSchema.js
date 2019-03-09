CREATE TABLE reservations(
    id serial primary key,
    first_name varchar(250),
    leaving_from varchar(250),
    going_to varchar(250),
    phone_number varchar(250),
    email varchar(250),
    departure_date varchar(250),
    departure_time varchar(250),
    number_of_people varchar(250)),
    is_confirmed BOOL DEFAULT 'f',
    message varchar(250),
    driver_name varchar(250),
    driver_id varchar(250),
    created_at timestamp without time zone default (now() at time zone 'utc’));

CREATE TABLE drivers (
    id serial primary key,
    first_name varchar(250),
    last_name varchar(250),
    password varchar(250),
    vehicle_type varchar(250),
    email varchar(250),
    created_at timestamp without time zone default (now() at time zone 'utc’))
