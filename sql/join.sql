-- write a query that shows all products, their name, and the product type name

create table product
(
  id bigserial primary key not null,
  product_name varchar(255) not null,
  product_type_id smallint references product_type(id),
  added timestamptz not null default now()
)
;

create table product_type
(
  id smallint primary key not null,
  product_type_name varchar(255) not null,
  added timestamptz not null default now()
)
;

-- product.product_type_id <= 0-1 => product_type.id

