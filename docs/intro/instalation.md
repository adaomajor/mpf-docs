# Instalation

make sure you have PHP and Composer or github path set and working correctly
## PHP
```sh
mpf@dev:$ php -v
PHP 8.1.6 (cli) (built: May 11 2022 08:55:59)...
```
If not, install PHP:

- Windows: https://windows.php.net

- macOS: brew install php

- Linux: sudo apt install php

## Composer

```sh
mpf@dev:$ composer -V
Composer version 2.8.9 2025-05-13 14:01:37
```
If not, install Composer:

Download via: https://getcomposer.org/download/

## Create A New Project
```sh
mpf@dev:$ composer create-project adaomajor/mpf my-app
```
## VIA GITHUB

```sh
mpf@dev:$ git clone https://github.com/adaomajor/mpf
mpf@dev:$ mv mpf my-app
```

```sh
mpf@dev:$ cd my-app
mpf@dev:$ php mpf start 8080
[date-time] PHP 8.x Development Server (http://127.0.0.1:8080) started
```
Open your Browser Go to:
```sh
http://127.0.0.1:8080
```

# 📂 Project Structure
```sh
├───App
│   ├───Controller
│   ├───Core
│   │   ├───DB
│   │   └───prefix
│   ├───Models
│   └───Views
├───public
│   vendor
│   .env            <----- your config file
│   .gitignore
│   .htaccess
│   composer.json
│   composer.lock
│   LICENSE
│   README.md
│   index.php
│   mpf
```

## Configuration 
⚙️
After installing MPF, you should configure your project settings to match your environment.

with the .env file implementations, its thousand times faster to configure your ENV.

The .env file is in the root directory of your project

All configuration values are stored in .env :
```sh
.env
```

```php
DB_USER=root
DB_PASSWD=
DB_NAME=MPF
DB_HOST=127.0.0.1
DB_PORT=3306

# simple comment

X_POWERED_BY="MPF - adaomajor"
```

Make sure to create your databse in your database server
```sh
mpf@dev:$ mysql -u root -p 
MySql [(none)] > create database mpf;
Query OK, 1 row affected (0.003 sec)
```

# NOW EVERYTHING IS OK
***Happy Conding***
---

## Issues
if you have contribuition or you find any issue or bug report it

🐛 Report bugs: https://github.com/adaomajor/mpf/issues

