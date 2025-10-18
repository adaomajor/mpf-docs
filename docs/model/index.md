# Model
MPF is made upon the MVC pattern, so here you see how to work with the Models

## Creating Model
```sh
mpf@dev:$ php mpf create model Users
[*] creating model: Users
[*] model: User created!
```
## Model
Your views are inside the path /App/Model

```sh
mpf@dev:$ cat /App/Model/Users.php
```
```php
namespace MPF\Model;
use MPF\Core\DB\Model;

Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::PK(),
            "name" => Model::char(30, $nullable = null),
            "email" => Model::char(70, $nullable = null),
            "password" => Model::char(255, $nullable = null),
        ];
    }
}
?>
```
You can use eather Model shortcut M or self instead of Model::*
```php
namespace MPF\Model;
use MPF\Core\DB\Model;

Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => self::PK(),
            "name" => self::char(30, $nullable = null),
            "email" => self::char(70, $nullable = null),
            "password" => self::char(255, $nullable = null),
        ];
    }
}
?>

## Migrate
You can migrate all the models with the following command
```sh
mpf@dev:$ php mpf migrate
[*] creating the table: Categories
[*] creating the table: Orders
[*] creating the table: Posts
[*] creating the table: Products
[*] creating the table: Users
```

Or you can migrate just a specific Modle
```sh
mpf@dev:$ php mpf migrate Users
[*] creating the table: Users
```
## Migration

now you can edit, add, remove model/database columns safely without reseting the whole database and with no risks of losing your datas.
take a look on the show case.
```sh
mpf@dev:$ cat /App/models/Users.php
```
```php
Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::PK(),
            "name" => Model::char(30, $nullable = null),
            "email" => Model::char(70, $nullable = null),
            "password" => Model::char(255, $nullable = null),
        ];
    }
}

```
# Migrate it
```sh
mpf@dev:$ php mpf migrate Users
[!] be careful about the changing on your database...
[*] Migrating the talbe: users
[+] saving migration: Users_migration_2025_10_15_22_19_47
[+] creating table: Users...
[+] table: Users, created sucessfully
```
 
 ***Your migrations are saved in App/Models/Migrations/<Model_name>***

Lets make some real change.
```sh
mpf@dev:$ cat /App/models/Users.php
```
```php
Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::PK(),
            "name" => Model::char(40, $nullable = null), // edited: from varchar 30 to 40
            "email" => Model::char(70, $nullable = null),
            "secong_mail" => Model::char(70, $nullable = null), // add: will be added to db columns
            //"password" => Model::char(255, $nullable = null), // remove: password columns will be removed from the table
        ];
    }
}
```
# Migrate it
```sh
mpf@dev:$ php mpf migrate Users
[!] be careful about the changing on your database...
[*] Migrating the talbe: users
[*] name : will be changed
[*] email : will be changed
[+] secong_mail : will be added
[-] password : will be removed
[+] creating migration: Users_migration_2025_10_15_22_29_29
```
 

## Model Fields Type
```php
 if ::PK() -> INT PRIMARY KEY NOT NULL AUTO_INCREMTENT
 if $nullable -> INT | else -> INT NOT NULL
 if $default -> TYPE | TYPE NOT NULL DEFAULT $default
 if $int(10) -> DECIMAL(10 | int, 2 | decimal)
 if $lenght -> VARCHAR($length | 50)
 if $now -> (CURRENT_DATE) | (CURRENT_TIMESTAMP)
 $choices -> ['Angola', 'USA' , 'Portugal', 'Brazil']
 
```
## PRIMARY KEY
```php
Model::PK();
```
---
## INTEGER
```php
Model::int($nullable = true | null, $default = int | null );
// INT
```
## DECIMAL
```php
Model::decimal($int | 10, $decimal | 2, $nullable = true | null, $default = int | null );
// DECIMAL(10,2)
```
##  CHAR | VARCHAR
```php
Model::char($length | 50,  $nullable = true | null, $default = int | null );
// VARCHAR(50)
```
## TEXT
```php
Model::text($nullable = true | null);
// TEXT
```
## BOOLEAN
```php
Model::bool($nullable = true | null, $default = true | false );
```
## ENUMARATIONS
```php
Model::enum($choices = ['M', 'F'], $nullable = true | null, $default = 'F' );
// ENUM('M','F')
```
## DATE
```php
Model::date($now = true | null , $nullable = true | null);
// DATE -> 2025-07-07
```
## DATE AND TIME
```php
Model::dateTIME($now = true | null , $nullable = true | null);
// DATETIME -> 2025-07-07 14:45:00.000
```