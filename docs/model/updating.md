# Update Data
## Update Some Datas
```php
use MPF\Core\Router;
use MPF\Controller\User; //import your custon controller
Router::post('/user/[id]/update', ['User', 'update']);
```

Now there is no need to instantiate the class before Updating

Just go Strait

*Model::update([ *new values* ])->where([ your conditions ])*



```php
    public function update($id){
        // AUTH
        $name = Res::post('name')
        $user = Users::update(['name' => $name])
            ->where(['id' => $id])
            ->exec();
        Res::json($users); //send the updated data as a json
    }
```