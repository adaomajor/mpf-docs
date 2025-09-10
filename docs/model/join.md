# JOIN

JOINs allow combining data from multiple tables.
The MPF ORM exposes a simple API with 3 main methods:

-   `join($table, $columns)` → selects additional columns from another
    table.\
-   `on($mapping) | onor($mapping)` → defines the relationship between the tables.

### Example: Two Tables (Users + Posts)

``` php
$posts = Post::find(["id","title"])
    ->join("users", ["name","email"])
    ->on([
        "posts" => ["user_id" => ["users","id"]]
    ])
    ->onor([
        "posts" => ["user_id" => 4]
    ])
    ->exec();
```

**SQL Generated**

``` sql
SELECT posts.id,posts.title,users.name,users.email
FROM posts
LEFT JOIN users ON posts.user_id = users.id OR posts.user_id = 4;
```

## ON
When you are relating Model fields to each other, you just need to do the following in on or onor function

```php
->on(['Users' => 
        [ 'id' => ['Posts','user_id'] ]
    ])
    // ON Users.id = Posts.users_id
```

## ONOR
onor, while joining, you use onor, instead of a simple or
```php
->onor(['Posts' => 
        [ 'user_id' => ['Users','id'] ]
    ])
    // OR Users.id = Posts.users_id
```
You can use exact values to find what you want insted, it works perfectly

```php
->on(['Users' => 
        [ 'id' => 1 ]
    ])
```
```php
->onor(['Posts' => 
        [ 'user_id' => 3 ]
    ])
```

Or you can combine with the operational operators showed in: [Relational Operator](/model/relationalop)
```php
->on(['Users' => 
        [ 'id' => M::lte(4) ]
    ])
```
```php
->onor(['Posts' => 
        [ 'user_id' => M::gte(16) ]
    ])
```

Quick Note: you can make ands statements by just adding more fields to the on or onor method

```php
->on(['Posts' => 
        [ 'id' => M::lte(4), 'user_id' => ['Users','id'] ]
    ])
```
with or, it follows the same logic

## ORDERING
When joining , for ordering, before calling your exec function, you specify the table and field
```php
    $u = Posts::find()
            ->join("Users", ['id', 'name'])
            ->on( ['Posts' => 
                    ['user_id' => ['Users' , 'id']]
                ])
            ->order(['users','id'], 1)->limit(2)
            ->exec();
```

## LIMITING
When joining , for limiting your recors, before calling your exec function, you call the limit function normally like a non joining statement

```php
    $p = Posts::find()
            ->join("Users", ['id', 'name'])
            ->on( ['Posts' => 
                    ['user_id' => ['Users' , 'id']]
                ])
            ->order(['users','id'], 1)->limit(2, 5) // OR limit(2)
            ->exec();
    Res::json($p);
```

## MORE AND  MORE

``` php
$comments = Comment::find(["id","body"])
    ->join("posts", ["title"])
    ->on([
        "comments" => ["post_id" => ["posts","id"]]
    ])
    ->join("users", ["name","email"])
    ->on([
        "posts" => ["user_id" => ["users","id"]]
    ])
    ->exec();
```

**SQL Generated**

``` sql
SELECT comments.id,comments.body,posts.title,users.name,users.email
FROM comments
LEFT JOIN posts ON comments.post_id = posts.id
LEFT JOIN users ON posts.user_id = users.id;
```


You can join more than one table | models that are realateds to each other and put together everything you've seen so far, to a more suitable query for what you want TO find

```php
    $comments = Comments::find(['id', 'post_id', 'content'])
        ->join('Posts', ['id','user_id', 'content'])
        ->on(['Posts' => ['id' => ['Comments', 'id'] ]])
        ->join('Users', ['id', 'name'])
        ->on(['Users' => ['id' => ['Posts', 'user_id']  ]])
        //->where() // or use where for more accurate records
        ->exec();
    Res::json($comments);

    // SELECT Comments.* , Posts.id, Posts.user_id, Posts.content, Users.id, Users.name FROM `comments` LEFT JOIN Posts on Posts.id = Comments.id LEFT JOIN Users on Users.id = Posts.user_id
```
 
Keep it simple!

now try to think out of the box, and mix it with other functions and operators to do whatever you think

✅ With these relational operators and join mechanisms, you can build
**complex, expressive queries** while staying in a **type-safe,
object-oriented layer** of the MPF ORM.

