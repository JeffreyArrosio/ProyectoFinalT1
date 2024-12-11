<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Descripción del Proyecto

Este proyecto es una aplicación web diseñada para gestionar datos y procesos relacionados con el compostaje en un centro educativo.

### Funcionalidades principales:

### Tecnologías Utilizadas

- **Frontend**: React
- **Backend**: Laravel con **Orion** para las APIs.
- **Base de Datos**: MySQL
- **Servidor Web**: Nginx
- **Automatización de despliegue**: GitHub Actions
- **Despliegue**: Configuración manual en VPS

---

## Instalación y Ejecución

### Requisitos Previos

1. **Node.js** y **npm** instalados.
2. **Composer** para gestionar dependencias de Laravel.
3. **Base de datos MySQL** configurada.
4. Servidor con **PHP 8.3** y **Nginx**.

### Pasos para Instalar

1. Clona el repositorio:
   ```bash
   git clone git@github.com:JeffreyArrosio/ProyectoFinalT1.git
   cd ProyectoFinalT1
2. Instala dependencias:
   ```bash
   npm install
   composer install
3. Configura el archivo .env:
   ```bash
   cp .env.example .env
   #Edita las credenciales según tu configuración local.
4. Genera la clave de la aplicación:
   ```bash
   php artisan key:generate
5. Ejecuta las migraciones:
   ```bash
   php artisan migrate
6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   php artisan serve
   #Si usas Laragon inicialo y luego haces un npm run dev.

## Automatización

Este proyecto utiliza GitHub Actions para automatizar el flujo de trabajo de desarrollo. El archivo de configuración se encuentra en .github/workflows/deploy.yml y realiza las siguientes tareas:

Ejecutar pruebas automáticamente en cada push o pull request.

Construir y desplegar la aplicación en el servidor de producción.

### Configuración de GitHub Actions
Asegúrate de configurar las siguientes variables de entorno en tu repositorio de GitHub:

SSH_PRIVATE_KEY: Clave privada SSH para acceder al servidor.

DEPLOY_SERVER: Dirección del servidor de despliegue.

DEPLOY_USER: Usuario para el acceso SSH al servidor.

## Usuarios:
URL: yeray.informaticamajada.es
Usuarios:
-Alberto: albert@prueba.com
-Jesus: jesus@prueba.com
-Dani: dani@prueba.com
-Cesar: cesar@prueba.com

Contraseña:
-La contraseña es "password" para todos.

Espero que esto te sea útil. Si necesitas más detalles o ajustes específicos, ¡avisadnos! 😊
