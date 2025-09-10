# Controller
MPF is made upon the MVC pattern, so here you see how to work with Controllers

## Creating Controller
```sh
mpf@dev:$ php mpf create controller User
[*] creating controller: User
[*] controller: User created!
```
## Controller
Your views are inside the path /App/Controller

```sh
mpf@dev:$ cat /App/Controller/User.php
```
```php
namespace MPF\Controller; //this line must be like this
use MPF\Core\Req;
use MPF\Core\Res;
use MPF\Core\View;
use MPF\Models\Users;

class User {
    public function index(){
        echo "Well come to my site";
    }

    public function profile($id){
        $u = $Users::find()->where(['id' => $id]);
        //return Res::json($u);
        $view = new View('profile');
        $view::set('user' , $u);
        return $view::render();
    }
}
```
## Calling Controller Method
```php
use MPF\Controller\User; //import your custon Controller
Router::get("/", ['User', 'index']);
Router::get("/profile/[id]", ['User', 'profile']);
```