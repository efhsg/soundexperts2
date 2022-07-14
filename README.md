# Soundexperts2

- Laravel 9
- Breeze 1
- 


### Prerequisites

- Docker
- Docker-compose

### Install

- Check out project
- Open shell, change to project directory
- ```cp .env.example .env```
- ```docker run --rm --interactive --tty --volume $PWD:/app --volume ${COMPOSER_HOME:-$HOME/.composer}:/tmp composer install```
- ```vendor/bin/sail up -d```
- ```vendor/bin/sail artisan key:generate```
- ```vendor/bin/sail artisan migrate```

or run ```./install.sh```

## Update npm

```
sail root-shell -c "npm update -g npm@latest"
```
