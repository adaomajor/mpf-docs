# Delete Data
## Delete Some Datas
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::post('/user/[id]/delete', ['User', 'delete']);
```

```php
    public function delete($id){
        // AUTH
        $userModel = new Users();
        $user = $userModel->delete(['id' => $id]); // delete from users where id = 1; and then return
        Res::json($users); //send deleted data as a json
    }
```
## AND
```php
    // inside user controller
    // delete(['id' => 1, 'name'=> 'adaomajor'])
    // WHERE id=1 AND name='adaomajor'
    public function delete($id){
        // AUTH
        $userModel = new Users();
        $user = $userModel->delete(['id' => $id, 'name' => 'Adão Major'])
        Res::json($user);
    }
```