
# 📘 MPF ORM -- Relational Operators

The MPF ORM provides a fluent API for building SQL conditions without
manually writing operators.\
These operators can be used inside `where`, `and`, `or`, `on` and `onor`, clauses.

### Available Operators

  -----------------------------------------------------------------------------------------------
  Method                    SQL Equivalent                     Example
  ------------------------- ---------------------------------- ----------------------------------
  `Model::gt($n)`           `>`                                `["age" => User::gt(18)]` →
                                                               `age > 18`

  `Model::gte($n)`          `>=`                               `["age" => User::gte(18)]` →
                                                               `age >= 18`

  `Model::lt($n)`           `<`                                `["age" => User::lt(65)]` →
                                                               `age < 65`

  `Model::lte($n)`          `<=`                               `["age" => User::lte(65)]` →
                                                               `age <= 65`

  `Model::like($pattern)`   `LIKE "%pattern%"`                 `["name" => User::like("John")]` →
                                                               `name LIKE "%John%"`

  -----------------------------------------------------------------------------------------------


### Basic Usage

``` php
// Users older than 18
$users = User::find()
    ->where(["age" => User::gt(18)])
    ->exec();
```

You can also call the operators function using the base Model or its shortcut M

``` php
use MPF\Core\DB\Model;
// Users older than 18
$users = User::find()
    ->where(["age" => Model::gt(18)])
    ->exec();
```

``` php
use MPF\Core\DB\M;
// Users older than 18
$users = User::find()
    ->where(["age" => M::gt(18)])
    ->exec();
```

**SQL Generated**

``` sql
SELECT users.* FROM users WHERE users.age > 18;
```

### Combining Multiple Conditions

``` php
$users = User::find()
    ->where(["age" => User::gte(18)])
    ->and(["age" => User::lt(65)])
    ->or(["name" => User::like("John")])
    ->exec();
```

**SQL Generated**

``` sql
SELECT users.* FROM users
WHERE (users.age >= 18 AND users.age < 65) OR users.name LIKE "%John%";
```

👉 This makes it possible to chain complex conditions while keeping the
query builder readable.