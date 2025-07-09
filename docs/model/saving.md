# Saving Data

## Model Exemple
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
## Calling The Controller
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::post('/register', ['User', 'register']);
```

## Saving The Data - User Controller
```php
<?php
    namespace MPF\Controller;
    use MPF\Core\View;
    use MPF\Core\Res;
    use MPF\Models\Users;
    class User{
        public function register(){
            $name = Req::post('name');
            $email = Req::post('email');
            $password = Req::post('password');

            
            $u = $userModel->save([
                'name' => $name,
                'email' => $email,
                'password' => md5($password)
            ]);

            if(!$u){ return Res::redirect('/register'); }
            return Res::redirect('/login');
        }
        //-- allUsers --
        //-- info --
    }
?>
```