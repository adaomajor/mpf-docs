# Req
## Req
thats the responsible MPF module to work with data sent during the requests

```php
use MPF\Core\Req; // import the module
```

## GET | POST

you can get the data sent via get or post using this module

# GET
```php
use MPF\Core\Req;
Router::get('/user' , function(){
    $id = Req::get('id');
    if($id){
        echo "Hi user id: ".$id;
        return;
    }
    echo "opps, no id given";
});

```
# POST
```php
use MPF\Core\Req;
Router::post('/user' , function(){
    $id = Req::post('id');
    if($id){
        echo "Hi user id: ".$id;
        return;
    }
    echo "opps, no id given";
});

```
## JSON
You can get json requests using this module

```php
use MPF\Core\Req;
Router::post('/register' , function(){
    $user = Req::json();
    if($user){
        return Res::json($user);
    }
    echo "Json bad format";
});
```
```sh
curl  -X POST \
  'localhost:8080/register' \
  --header 'Content-Type: application/json' \
  --data-raw '{"name":"adaomajor","email":"adaomajor01@gmail.com"}' -i


HTTP/1.1 200 OK
Host: localhost:8080
Connection: close
x-powered-by: mpf-amj
Content-Type: application/json; charset=utf8

{"name":"adaomajor","email":"adaomajor01@gmail.com"}
```

## Cookies
You can get cookies sent by the client using this module

```php
use MPF\Core\Req;
Router::get('/dashboard' , function(){
    $id = Req::cookie('id');
    if($id){
        return View::view('Welcome');
    }
    return Res::redirect('/login');
});
```

## Sessions
You can get the server's sessions using this module
```php
use MPF\Core\Req;
Router::get('/dashboard' , function(){
    $user = Req::session('user');
    if($user){
        return View::view('Welcome');
    }
    return Res::redirect('/login');
});
```
## Headers
You can get the user's Headers using this module
```php
use MPF\Core\Req;
Router::get('/see' , function(){
    $user = Req::header('AUTH-TOKEN');
    if($user){
        return View::view('Welcome');
    }
    return Res::redirect('/login');
});
```