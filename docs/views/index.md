# Views
MPF is made upon the MVC pattern, so here you see how to work with views

## Creating View
```sh
mpf@dev:$ php mpf create view Profile
```
## Views
Your views are inside the path /App/Views. the extesions is .view.php

## Returning a view
Statical calling
```php
use MPF\Core\View; 
Router::get("/profile", function(){
    return View::view('Profile'); // just the name of the view. no extension
});
```
With a View class instance
```php
use MPF\Core\View; 
Router::get("/profile", function(){
    $view = new View('Profile'); // just the name of the view. no extension
    return $view::render(); // actually send the view 
});
```
With a controller
```php
Router::get("/profile", ["Controller", "profile"]); //make your controller return the view
```

## Passing Data Through view
You can set data to be used in the view
```php
use MPF\Core\View; 
Router::get("/", function(){
    $view = new View('profile'); // just the name of the view. no extension
    $view::set('id', 10011);
    $view::set('name', 'Adão Major');
    $view::set('Bio', 'Hi Im Mr. Adam');
    return $view::render(); // actually send the view 
});
```
## Getting Data Through view
You can get data inside the view passed trough the controller
```sh
mpf@dev:$ cat /App/Views/profile.view.php
```
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Profile</title>
</head>
<body>
    <p>User Id: <?php echo $View::get('id'); ?> </p>
    <p> Name: <?php echo $View::get('name'); ?> </p>
    <p> Biography: <?php echo $View::get('Bio'); ?> </p>
</body>
</html>
```