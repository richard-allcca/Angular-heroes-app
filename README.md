# HeroesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Temas tocados en este proyecto

1. Manejo de `Rutas`

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

      npm i @angular/flex-layout
      npm i -s @angular/flex-layout @angular/cdk
      npm install -g json-server

## Rutas Hijas

1. Crear `nameRouting` a nivel del modulo de la carpeta donde tendras rutas hijas
2. Configurar rutas hijas ejemplo en el archivo `heroes-routing-module`
3. Usar un `router-outlet` en el archivo html que indicaste como `component` antes de `children` ejemplo: `heroes-routing-module` ln 13

## Servicios

- Para user los servicios de forma global necesitas tener el `HttpClientModule` importados en el `app-module`
- El archivo `service` tiene que tener la propiedad de:
  
      @Injectable({
      providedIn: 'root'
      })

## Notas - commandos CLI

1. Guards - utilizado en rutas privadas, ejemplo en "app.routing.module"

         ng g guard nameFolder/nameFolder/nameFile
