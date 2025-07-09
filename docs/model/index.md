# Model
MPF is made upon the MVC pattern, so here you see how to work with the Models

## Creating Model
```sh
mpf@dev:$ php mpf create model User
[*] creating model: User
[*] model: User created!
```
## Model
Your views are inside the path /App/Model

```sh
mpf@dev:$ cat /App/Model/User.php
```
```php
namespace MPF\Model;
use MPF\Core\DB\Model;

Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::int($pk = true),
            "name" => Model::char(30, $nullable = null),
            "email" => Model::char(70, $nullable = null),
            "password" => Model::char(255, $nullable = null),
        ];
    }
}
?>
```
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

### ⚠ Warning: migrate all the models my throw foreign keys constrains error
#### if it happens migrate one by one, or fisrt the table with the columns which other will use as Foreign Keys

## Model Fields Type
```php
 if $pk -> INT PRIMARY KEY NOT NULL AUTO_INCREMTENT
 if $nullable -> INT | else -> INT NOT NULL
 if $default -> TYPE | TYPE NOT NULL DEFAULT $default
 if $int(10) -> DECIMAL(10 | int, 2 | decimal)
 if $lenght -> VARCHAR($length | 50)
 if $now -> (CURRENT_DATE) | (CURRENT_TIMESTAMP)
 $choices -> ['Angola', 'USA' , 'Portugal', 'Brazil']
 
```
## INTEGER
```php
Model::int($primary_key = true | false, $nullable = true | null, $default = int | null );
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
Model::enum($choices = [], $nullable = true | null, $default = 'Angola' );
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