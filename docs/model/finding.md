# Find Data
## Finding Some Datas
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::get('/user/all', ['User', 'allUsers']);
```
```php
    // inside user controller
    // model->find() -> means SELECT * FROM table
    public function allUsers(){
        $userModel = new Users();
        $users = $userModel->find()->exec();
        Res::json($users);
    }
```
```php
    // inside user controller
    // model->find(['col','col'...]) -> means SELECT table.col, table.col FROM table
    public function allUsers(){
        $userModel = new Users();
        $users = $userModel->find(['id','name', 'email'])->exec();
        Res::json($users);
    }
```
## WHERE
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::get('/user/[id]', ['User', 'info']);
```
```php
    // inside user controller
    // where(['id' => 1)
    // WHERE id=1;
    public function info($id){
        $userModel = new Users();
        $user = $userModel->find(['id','name', 'email'])
            ->where(['id' => $id])
            ->exec();
        Res::json($user);
    }
```
## AND
```php
    // inside user controller
    // where(['id' => 1, 'name'=> 'adaomajor'])
    // WHERE id=1 AND name='adaomajor'
    public function info($id){
        $userModel = new Users();
        $user = $userModel->find(['id','name', 'email'])
            ->where(['id' => $id, 'name' => 'Adão Major'])
            ->exec();
        Res::json($user);
    }
```
## OR
```php
    // inside user controller
    // or(['id' => 1, 'name'=> 'adaomajor'])
    // .. OR id=1 OR name='adaomajor'
    public function info($id){
        $userModel = new Users();
        $user = $userModel->find(['id','name', 'email'])
            ->where(['id' => $id]) // <-- ['col'=>val , 'col'=>val...]
            ->or(['id' => 49]) // <-- ['col'=>val , 'col'=>val...]
            ->exec();
        Res::json($user);
    }
```

## ORDER BY
```php
    // inside user controller
    // order('col', 'ASC' | 'DESC')
    public function allUsers(){
        $userModel = new Users();
        $users = $userModel->find(['id','name', 'email'])
            ->order('id', 'DESC')
            ->exec();
        Res::json($users);
    }
```

## LIMIT

```php
    // inside user controller
    // limit(limit)
    public function allUsers(){
        $userModel = new Users();
        $users = $userModel->find(['id','name', 'email'])
            ->order('id', 'DESC')
            ->limit(1);
            ->exec();
        Res::json($users);
    }
```
```php
    // inside user controller
    // limit(start, end)
    public function allUsers(){
        $userModel = new Users();
        $users = $userModel->find(['id','name', 'email'])
            ->order('id', 'DESC')
            ->limit(5, 5); // get 5 starting from 5th result
            ->exec();
        Res::json($users);
    }
```