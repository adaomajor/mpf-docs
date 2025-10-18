# WHATS NEW IN VERSION 1.0.3

## mpf

<img src="/mpf.png" alt="MPF logo" width="150" height="200" />
v1.0.3


# SHORT OVERVIEW

Added migrations system 

Added support for foreign keys (including post-migration)

Improved constraint handling on delete

⚙️ Query Engine

Fixed issue with newly saved data not returning properly

Fixed count() + where() compatibility

Fixed join() when on() is not explicitly defined

Fixed column overwriting when joining tables with identical column names

🧩 Environment

Added .env DEBUG and PRODUCTION modes
 
When DEBUG=TRUE, all system messages and SQL logs are displayed

When DEBUG=false, errors and debug outputs are suppressed for production safety



---
# Added migrations system
now you can edit, add, remove model/database columns safely without reseting the whole database and with no risks of losing your datas.

[Migration System](/model/#migration)


---

# Enviroment System && DEBUG(develpment) / production mode implementation
with .env file implementation its much easier to configure your enviroment

[Enviroment System](/intro/instalation#configuration)

---

## Model Methods Statical Calling
with this new Features you don't need to instatiate a model class before you use it
now your code can be more readable and easier to manage

✅ [ save ](/model/saving#saving-the-data-user-controller)

✅ [ find ](/model/finding)

✅ [ updating ](/model/updating)

✅ [ delete ](/model/deleting)


## Relaitional Operators
Now you can test logically your queries with the relation operators implementation

✅ < | > | <= | >= 

[Relaitional Operators](/model/relationalop)

## Ordering
Check the new way to sort your results

[New Ordering way](/model/finding#order-by)

## Counting
Now you can get the count of one or more fields in your DB through the models

[Count Records](/model/finding#counting)

## Join
Now your joins is no longer limited to 2 models

now you can join as many models you can, and using the new statical calling, relational op and ordering features

[Join's news features](/model/join)
