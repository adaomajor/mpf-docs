# FOREIGN KEYS

```sh
mpf@dev:$ php mpf create model Users
[*] creating model: Users
[*] model: User created!
```

```sh
mpf@dev:$ php mpf create model Posts
[*] creating model: Posts
[*] model: Posts created!
```
# After creating the models, migrate your models
- [See how](/model/#migrate)
## Users
```php
namespace MPF\Model;
use MPF\Core\DB\Model;

Class Users extends Model{
    protected $table = "Users";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::PK(),
            "name" => Model::char(30, $nullable = null),
            "email" => Model::char(70, $nullable = null),
            "password" => Model::char(255, $nullable = null),
        ];
    }
}
?>
```

## Posts
```php
namespace MPF\Model;
use MPF\Core\DB\Model;

Class Posts extends Model{
    protected $table = "Posts";
    protected $fields = [];
            
    public function __construct(){
        $this->fields = [
            "id" => Model::PK(),
            "user_id" => Model::FK(['User', 'id']), // <-- check it out
            "content" => Model::text($nullable = null)
        ];
    }
}
?>
```
- **You can have more than one Foreign Key in you model**

## Saving
**User**
```php
$user = Users::save([
    'name' => 'Adão Major',
    'email' => 'adaomajor01@gmail.com',
    'password' => md5('1234')
]);
```

**Post**
```php
$post = Post::save([
    'user_id' => 1, // <-- your user id
    'content' => 'foo, bar'
])
```