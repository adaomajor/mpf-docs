# RAW QUERIES

OK, so far, nothing is suitable for you, no problems
you can use the funcition RawQuery from the model

# ⚠️ using this method may leave your webapp vulnerable for SQLI


```php
    $users = Model::RawQuery('SELECT * FROM USERS')
```

OR using the model's shortcut

```php
    $users = M::RawQuery('SELECT * FROM USERS')
```

OR you can use the table in itself

```php
    $users = Users::RawQuery('SELECT * FROM USERS')
```

I strongly advise you to not use it, but you might want, its up to you


Keep it simple!