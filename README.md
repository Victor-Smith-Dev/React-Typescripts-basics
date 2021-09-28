![Header Tech](https://i.ibb.co/WD232PR/image.png)

# Descripción

En este repositorio encontrarás prácticas **básicas** de **reactJs** con **Typescript**, los componentes han sido tratados como funciones, por lo tanto encontrarás el uso **básico** de algunos hooks de react y adicionalmente hay un **CustomHook** el cual puede servir de guia para entender mejor el funcionamiento de los mismos. También podemos encontrar:

1. Listados dinámicos.
2. Llamados a API`S
3. Formularios.
4. React Hooks.
5. Axios.

## Scripts Disponibles

El en directorio principal del proyecto puedes ejecutar los siguientes comandos para ver la app en el navegador.

### `yarn start or npm start`

218 / 5000
Resultados de traducción
Ejecuta la aplicación en modo de desarrollo. \
Abra [http: // localhost: 3000] (http: // localhost: 3000) para verlo en el navegador.

La página se recargará si realiza modificaciones. \ También verá errores en la consola. 

## Algunas capturas

### `CustomHook`
![CustomHook](https://i.ibb.co/BV7JK7p/image.png)

Este se invoca desde el componente que se rederiza, el mismo es un formulario básico, el cual se construyó para ejemplificar lo expuesto.

### `Formulario de ejemplo para invocar el hook construido`
![Formulario de Ejemplo](https://i.ibb.co/Dk5rVJG/image.png)

De esta forma nos aseguramos que los campos que deseamos utilizar sea **tipos** seleccionables en nuestro componente

![Tipos selecionables](https://i.ibb.co/PNqb6Pk/image.png)

### `Listado Dinámico (implementación)`
![Listado dinámico](https://i.ibb.co/GV7VQQv/image.png)

### `Listado dinámico (resultado)`

![Listado dinámico (resultado)](https://i.ibb.co/KWSqyxr/image.png)

Este listado hace uso de una interfaz llamada **Usuario** la cual es importada de un archivo llamado **reqRes** , acá dejo la estructura del mismo:

### `Interfaz referencial del response del API`
![interfaz reqRes](https://i.ibb.co/z4DGhgn/image.png)

Este archivo contiene tres interfaces, y es importante revisarlo porque nos enseña como construir interfaces que tienen dentro de sus atributos objetos literales.

### `Llamado al API reqres`
    import axios from "axios";

    export const reqResApi = axios.create({
      baseURL: "https://reqres.in/api",
    });
