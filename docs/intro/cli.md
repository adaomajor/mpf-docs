# CLI - command line functionalities

## HELP
```sh
mpf@app:$ php mpf help
        ╔══════════════════════════════════════════════════════╗
        ║                MPF Framework CLI v 1.0.0             ║
        ║           Minimal PHP Framework by adaomajor         ║
        ║            https://github.com/adaomajor/mpf          ║
        ╚══════════════════════════════════════════════════════╝

Usage:
     php mpf <command>

Available Commands:

     help     Show this banner
     start    Starts the development server
     create   Create a veiw, controller, model
     delete   Delete a veiw, controller, model
     Migrate  Create database tables for your Models

Examples:
     php mpf start 8080
     php mpf create  / delete  view Home
     php mpf create  / delete  controller User
     php mpf create  / delete model User
     php mpf migrate / migrate model

MPF is handcrafted by Adão Major — simple, clean and powerful.
Happy coding with MPF! 🚀
```
## Start

start the built-in server for the App with the given port

```sh
mpf@app:$ php mpf start 8080
[date-time] PHP 8.x Development Server (http://127.0.0.1:8080) started
```

## Create
create a new instance of the given elemet with the given name
##### View
##### Controller
##### Model
```sh
mpf@app:$ php mpf create
[*] create what, view, controller, model??
```

## Create View
Create a new View with the given name
```sh
mpf@app:$ php mpf create view Home
[*] creating view: Home
[*] view: Home created!
```
#### the Views are saved in /App/Views

## Create Controller
Create a new Controller with the given name
```sh
mpf@app:$ php mpf create controller Home
[*] creating controller: Home
[*] controller: Home created!
```

#### the Views are saved in /App/Controller

## Create Model

Create a new Model with the given name
```sh
mpf@app:$ php mpf create model Posts
[*] creating model: Posts
[*] model: Posts created!
```

#### the Views are saved in /App/Model

## Migrate

Accually creates the database tables for the models in the database server
```sh
mpf@app:$ php mpf migrate
[*] creating the table: Users
[*] creating the table: Posts
[*] creating the table: Categories
[*] creating the table: Products
[*] creating the table: Orders
```
###### you can migrate a single Model by passing down the name of the model as an additional argument
it's useful when you are working with foreign keys constrains dependencies, firstly create the table that the others will be related with, if you see some constrain Error
```sh
mpf@app:$ php mpf migrate Users
[*] creating the table: Users
```

# ⚠ Run migrate again may reset all the table and delete all the datas stored
#### further version will have functionalities for migratinos

## Delete
Similar to create you can dele de elements of your app with the delete /del command line argument as well

```sh
mpf@app:$ php mpf { delete | del } { view | controller | model } name
```