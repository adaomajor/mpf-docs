# Router
Thats the responsible MPF module for mapping all of your app entry points

You can find and edit it in the file index.php in your root dir of your app
```sh
mpf@app:$ ls -la
drwxr-xr-x 1 adaomajor 197121     0 Jul  6 13:21 App/
drwxr-xr-x 1 adaomajor 197121     0 Jul  5 15:04 public/ <-- here is your static folder
drwxr-xr-x 1 adaomajor 197121     0 Jul  6 13:21 vendor/
-rw-r--r-- 1 adaomajor 197121   364 Jul  4 18:08 composer.json
-rw-r--r-- 1 adaomajor 197121   569 Jul  3 23:18 composer.lock
-rw-r--r-- 1 adaomajor 197121   234 Feb  9 21:36 .htaccess
-rw-r--r-- 1 adaomajor 197121   450 Jul  6 13:08 index.php <-- here it is
-rw-r--r-- 1 adaomajor 197121 10762 Jul  6 13:57 mpf

mpf@app:$ cat index.php
```

```php
<?php
    require __DIR__. "/vendor/autoload.php";
    use MPF\Core\Router;

    Router::get('/', function () {
        $view = new View('Welcome');
    });
    Router::fallback('404');
    Router::static("/public/");
    Router::run(); // this should in the last line before exit
    exit; // ensure the closed after any request is completed
?>
```
## GET | POST
You can set routes for differents methods
```php
Router::get('/', ['Home', 'index']);
Router::post('/login', ['User', 'login']);
```

## Anonymous Function
You can pass the controller argument as an anonymous function

```php
Router::get('/', function () {
    echo "Hello I'm from an anonymous function";
    reurn;
});
```
```sh
curl http://127.0.0.1:8080/ -i
HTTP/1.1 200 OK
Host: 127.0.0.1:8080
Date: Sun, 06 Jul 2025 13:34:08 GMT
Connection: close
x-powered-by: mpf-amj
Content-type: text/html; charset=UTF-8

Hi I'm from anonymous function
```
## Passing Controller
You can pass a controller for a specific route
```php
use MPF\Controller\Home;
use MPF\Controller\User;
Router::get('/', ['Home', 'index']);
Router::post('/login', ['User', 'login']);
```
## Passing Parameters
You can create routes passing parameters through the url
```php
Router::get('/user/[id]', function ($id) {
    echo "Hello User with id: ".$id;
});
```
With a controller
```php
Router::get('/post/[user_id]/[id]', ['Contller', 'Method']);
// so you treat the id inside the controller::method
```

## Views
You can return a view as well, your views are in the the path /App/Views
```php
use MPF\Core\View; //import the view Modeule
Router::get('/', function () {
    reurn View::view('Welcome') 
    // just pass the view name, without the extension Welcome.view.php
});
```
## Fallback
In case of a 404 response you can send a custom 404 response
```php
use MPF\Core\View;
use MPF\Core\Res;
Router::fallback(function () {
    Res::status(404);
    reurn View::view('404') 
});
```
Or you can just do it
```php
use MPF\Core\View;
Router::fallback("404"); // pass down the view name
```

## Static Files
Setting the static folder where your static files will be served from
#### js | css | jpeg | jpg | png | ico | ...
The static path for your static files must be outside the /App/ directory 
- [static folder](#router)

```php
Router::static("/public/"); // linux is case sensitive - be aware
```
