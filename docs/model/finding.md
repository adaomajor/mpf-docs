# Find Data
## Finding Some Datas
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::get('/user/all', ['User', 'allUsers']);
```
```php
    // inside user controller
    // Users::find() -> means SELECT * FROM table
    public function allUsers(){
        $users = Users::find()->exec();
        Res::json($users);
    }
```
```php
    // inside user controller
    // Users::find(['col','col'...]) -> means SELECT table.col, table.col FROM table
    public function allUsers(){
        $users = Users::find(['id','name', 'email'])->exec();
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
        $user = Users::find(['id','name', 'email'])
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
        $user = Users::find(['id','name', 'email'])
            ->where(['id' => $id, 'name' => 'Adão Major'])
            ->exec();
        Res::json($user);
    }
```

# AND
??? what if you want to set two differents ids, like where id > x and id < y
as php doesnt accept repeated values in key in the same array, to solve that, just call the function and after where

Or if you want to set a range, you can use the Relational Operators
with and AND or OR, like users with the ID between 10 and 30

NOTE: dont forget to import the Model class or its shortcut M class in your index.php -> the router

Learn More about [Relaitional Operators](/model/relationalop)

```php
    use MPF\Core\DB\{ Model | M }

    // inside user controller
    // WHERE id > 10 AND id < 30'
    public function info($id){
        $user = Users::find(['id','name', 'email'])
            ->where([ 'id' => M::gt(10) ])
            ->and([ 'id' => M::lt(30) ])
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
        $user = Users::find(['id','name', 'email'])
            ->where(['id' => $id]) // <-- ['col'=>val , 'col'=>val...]
            ->or(['id' => 49]) // <-- ['col'=>val , 'col'=>val...]
            ->exec();
        Res::json($user);
    }
```

## ORDER BY
Use the updated method to sort your result
*Model->order('Field', order)*

The order must be 1 or -1 for ascending or descendig order

if you are in a Join statement use
*Model->order(['Model', 'Field'], order)*

```php
    // inside user controller
    // order('col', 1 | -1)
    public function allUsers(){
        $users = Users::find(['id','name', 'email'])
            ->order('id', -1)  // now you order by the column name, and 1 or -1 for ascending or descending order
            ->exec();
        Res::json($users);
    }
```

## LIMIT

```php
    // inside user controller
    // limit(limit)
    public function allUsers(){
        $users = Users::find(['id','name', 'email'])
            ->order('id', -1)
            ->limit(1);
            ->exec();
        Res::json($users);
    }
```
```php
    // inside user controller
    // limit(start, end)
    public function allUsers(){
        $users = Users::find(['id','name', 'email'])
            ->order('id', -1)
            ->limit(5, 5); // get 5 starting from 5th result
            ->exec();
        Res::json($users);
    }
```

## Counting
You can use the Model::count to counts the records of a specific field or more than one in your DB

*keep it simple as always*

```php
    public function adults(){
        $users = Users::count(['id'])
            ->where(['age' => M::gte(18)])
        Res::json($users);
    }
```

```php
    public function adults(){
        $users = Users::count(['foo', 'bar'])
            ->where(['age' => M::gte(18)])
        Res::json($users);
    }
```