# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

1. Para correr en local si no tienes `cli` global

    npm install -D @angular/cli
    npm run start

2. correr el local si tienes la version 14.2.0 cli de angular

    ng serve -o

3. Para levantar el servidor local (ubicate en la carpeta que que contiene la db)

    json-server --watch db.json --port 3000

## Comandos

- Crear routing module general (--flat para crearlo a nivel no en carpeta) importar en ap.module
    ng g m appRouting --flat

- Crear modulo con routing
    ng g m nameModule --routing

## Temas tocados en este proyecto

1. Manejo de Rutas `routerLink` `navigate` `activateRoute`

2. Carga perezosa `Lazy Load`

3. Angular Material

4. Angular Flex y Flexbox

5. Interfaces y tipado

6. Pipes personalizados

7. Variables de entorno

8. Autocomplete de AngularMaterial

9. Peticiones HTTP

10. JSON-Server

11. CRUD - Create, Read, Update, Delete

12. Pipes puros e impuros

13. Snacks

14. Dialogs

15. Inyección de servicios manualmente

16. Guards - CanLoad

## Enlaces

- [Angular Material](https://material.angular.io/)
- [Angular Flex](https://www.npmjs.com/package/@angular/flex-layout)
- [Material Icon](https://fonts.google.com/icons?selected=Material+Icons:bookmark)
- [Json Server](https://www.npmjs.com/package/json-server)

## Npm

      npm i @angular/flex-layout (solo en heroes.module)
      npm i -s @angular/flex-layout @angular/cdk (solo en heroes.module)
      npm install -g json-server 

## Notas - Rutas Hijas

1. Crear `nameRouting` a nivel del modulo de la carpeta donde tienes los componentes para las sub rutas
2. Configurar rutas hijas ejemplo en el archivo `heroes-routing-module`
3. Importar el routing.module en el modulo del componente `auth.routin.module -> auth.module`
4. Usar un `router-outlet` en el archivo html que indicaste como `component` de router antes de `children` ejemplo: `heroes-routing-module` ln 13

## Notas - Servicios

- Para las peticiones `HTTP` los servicios necesitan tener el `HttpClientModule` importados en el `app-module`
- Para usarlo de forma local debes proveerlo en el modulo que nesecites
- La propieda del injectable `provideIn` debe estar en 'root' para usarlo de forma global
- Necesitas tener importado el `HttpClientModule` en el `app-module`

## Commandos CLI

1. Guards - utilizado en rutas privadas, ejemplo en "app.routing.module"

         ng g guard nameFolder/nameFolder/nameFile
