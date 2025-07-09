
## Res
thats the responsible MPF module to work with response datas

## Cookies
You can set the cookies doing
```php
use MPF\Core\Res; // import the module
Router::get('/home' , function(){
    // make your business logic here
    // Res::cookie(array_values, expire_time, path)
    // time by default is time() + 3600
    // path by default is "/"

    if($user){
        Res::cookie([
            'id' => 10011,
            'name' => 'Adão Major',
            'token'=>'your_secret_token'
        ]);
        return View::view('Home');
    }
    return Res::redirect('/login');
});
```
## Delete Cookies
You can delete a cookie doing
```php
use MPF\Core\Res;
Router::get('/logout' , function(){
    Res::delcookie('id');
    Res::delcookie('name');
    Res::delcookie('token');
    return Res::redirect('/login');
});
```
## Json Response
You can send a json response, doing the following
```php
use MPF\Core\Res;
Router::get('/user/[id]' , function($id){
    $user = [
        'id' => $id,
        'name'=> 'Adão Major',
        'Bio' => 'Hi, Im Mr. Adam'
    ]
    return Res::json($user);
});
```
## Sessions
You can set sessions using this module as well
```php
use MPF\Core\Res;
Router::post('/login' , function(){
    Res::session(['user_id' => 10011, 'token' => 'your_secret_token']);
    return Res::redirect('/');
});
```
## Delete Session
Similarly you can unset a session using this module as well
```php
use MPF\Core\Res;
Router::get('/logout' , function(){
    Res::delsession('user_id');
    Res::delsession('token');
    return Res::redirect('/');
});
```

## Headers
Setting headers is too easy
```php
use MPF\Core\Res;
Router::post('/user/register/' , function(){
    echo "User Registered!";
    Res::status(201);
    return Res::header('Location: /home');
});
```
## HTTP Status Code
Easy peasy!
```php
use MPF\Core\Res;
Router::get('/ok' , function(){
    echo "OK";
    return Res::status(200);
});
```
## Redirect
```php
use MPF\Core\Res;
Router::get('/gotogithub/' , function(){
    return Res::redirect("https://github.com/adaomajor");
});
```