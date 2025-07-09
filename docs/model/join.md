# JOIN
```php
// JOIN USERS ON Users.id = 1;
Router::get('/user/[id]/posts', function ($id) {
    $p = $postModel->find()
            ->join("Users", ['id', 'name'])
            ->where(['Users' => ['id' => $id ]])
            ->exec();
        Res::json($p);
});
```
## AND
```php
// JOIN USERS ON Users.id = 1 AND Posts.user_id= 1;
Router::get('/user/[id]/posts', function ($id) {
    $p = $postModel->find()
            ->join("Users", ['id', 'name'])
            ->where(['Users' => ['id' => $id ], 'Posts', ['user_id' => $id]])
            ->exec();
        Res::json($p);
});
```
## OR
```php
// JOIN USERS ON Users.id = $id OR Users.id = 1;
Router::get('/user/[id]/posts', function ($id) {
    $p = $postModel->find()
            ->join("Users", ['id', 'name'])
            ->where(['Users' => ['id' => $id ]])
            ->or(['Users' => ['id' => 1 ]])
            ->exec();
        Res::json($p);
});
```