# Tarjetas

## Descripción

Este proyecto es parte de una __prueba técnica__ para Tekman. 
La aplicación consta de __tres pantallas__ y un __menú lateral__ desplegable.

- En la primera pantalla, se presenta una tarjeta principal que muestra la __sesión actual__, seguida de tres tarjetas secundarias que indican el __progreso global__ del curso. Los datos se obtienen de manera dinámica a partir de un archivo __JSON__ (utilizado para simular una base de datos, dado que el proyecto no requería una parte de backend). Esto permite la __adición y eliminación__ de trimestres y sesiones sin necesidad de realizar modificaciones en la parte frontal de la aplicación.

- En la segunda pantalla, se muestra el estado de la __sesión actual__, con las clases ya __completadas__, destacando la __clase actual__ y desactivando las demás. Al hacer clic en la clase actual, se accede a la tercera pantalla.

- La __tercera pantalla__ tiene un enfoque principalmente informativo, con un __llamado a la acción__ para comenzar la clase.

- Al hacer clic en el __icono de engranaje__ en la barra de encabezado, se abre un __menú lateral__ que permite la selección del __idioma y del curso__.


## Instalación

Para instalar este proyecto, siga estos pasos:
1. Clone el repositorio localmente utilizando el siguiente comando:

``git clone``

2. Una vez instalado, ingrese al directorio del proyecto utilizando:

``cd tarjetas``

3. Finalmente, para ejecutar la aplicación, utilice el siguiente comando:

``ng serve -o``


### Stack

Las tecnologías empleadas en este proyecto incluyen:

- __Angular__ (v16.2) como el framework principal.
- __TypeScript__ para la programación del lado del cliente.
- __HTML__ para la estructura de las páginas web.
- __SASS__ para la generación de estilos y hojas de estilo.
- __FontAwesome__ se utilizó para la incorporación de iconos en la interfaz.


