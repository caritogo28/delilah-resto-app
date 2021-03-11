# Proyecto Delilah Resto - Backend

Proyecto educativo de Acámica, se trata de un proyecto backend de Pedidos para un restaurante

## Herramientas utilizadas

- Node.js
- Express.js
- Passport.js
- bcrypt.JS
- MySQL

## Guia de instalación

### 1. Descarga el proyecto

- Descarga el repositiorio en https://github.com/caritogo28/delilah-resto-app.git

### 2. Descarga programas para interactuar con el proyecto

- Xampp
- Node.js
- Postman
- Visual Studio Code

### 3. Instala paquetes requeridos (puede ser en Visual Studio Code) e inicia el servidor

- Abre la terminal e ingresa:

```sh
$ npm install
$ npm install -d
$ npm run dev
```

### 4. Configura la Base de datos

- Descarga XAMPP e inicia Apache y Mysql modules
- Abre el link: [phpMyAdmin](http://localhost/phpmyadmin/ "phpMyAdmin")
- Importa el archivo `db.sql` en phpMyAdmin
- Deberías tener una nueva base de datos llamada `Delilah_Resto` con la estructura de la tabla

### 5. Abre Postman y prueba los endpoints

- Ejemplo de ruta: `http://localhost:3000/'ejemploruta'`

## Endpoints.

Para interactuar con el proyecto debes seguir estos endpoints que están creado bajo la base CRUD.

### EndPoints - USUARIOS

| protocolo | categoria | Endpoints                              | descripcion |
| --------- | --------- | -------------------------------------- | ----------- |
| GET       | Users     | http://localhost:3000/users/           | All Users   |
| GET       | Users     | http://localhost:3000/users/:id        | User        |
| PUT       | Users     | http://localhost:3000/users/edit/:id   | Edit User   |
| DELETE    | Users     | http://localhost:3000/users/delete/:id | Delete User |

### EndPoints - PRODUCTOS

| protocolo | categoria | Endpoints                                 | descripcion    |
| --------- | --------- | ----------------------------------------- | -------------- |
| GET       | Products  | http://localhost:3000/products/           | All Products   |
| GET       | Products  | http://localhost:3000/products/:id        | Product        |
| PUT       | Products  | http://localhost:3000/products/edit/:id   | Edit Product   |
| POST      | Products  | http://localhost:3000/products/add        | Add Product    |
| DELETE    | Products  | http://localhost:3000/products/delete/:id | Delete Product |

### EndPoint - ORDENES

| protocolo | categoria | Endpoints                               | descripcion  |
| --------- | --------- | --------------------------------------- | ------------ |
| GET       | Orders    | http://localhost:3000/orders/           | All Orders   |
| GET       | Orders    | http://localhost:3000/orders/:id        | Order        |
| PUT       | Orders    | http://localhost:3000/orders/edit/:id   | Edit Order   |
| POST      | Orders    | http://localhost:3000/orders/add        | Add Order    |
| DELETE    | Orders    | http://localhost:3000/orders/delete/:id | Delete Order |

### EndPoints - GENERALES

| protocolo | categoria | Endpoints                     | descripcion  |
| --------- | --------- | ----------------------------- | ------------ |
| GET       | Logout    | http://localhost:3000/logout/ | Log Out      |
| GET       | Profile   | http://localhost:3000/profile | User Profile |
| GET       | Home      | http://localhost:3000/        | Home App     |
| POST      | Sign Up   | http://localhost:3000/signup  | User Sign Up |
| POST      | Sign In   | http://localhost:3000/signin  | User Sign In |

## Información importante:

### Métodos de pago aceptados

- Efectivo
- Tarjeta de debito
- Tarjeta de credito

#### Status de las órdenes

- New
- Confirmed
- In Process
- On the Go
- Delivered

#### Puerto para el servidor

`3000`
