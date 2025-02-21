<h1 align="center"> Challenge Amigo Secreto</h1>

"Amigo Secreto" es una aplicación web interactiva diseñada para gestionar una lista de nombres de amigos secretos. La aplicación utiliza HTML, CSS y JavaScript para ofrecer una experiencia dinámica en la que los usuarios pueden agregar y visualizar nombres en tiempo real.

## Descripción

La aplicación permite a los usuarios:
- Agregar nombres a una lista de amigos secretos.
- Validar que el campo de entrada no esté vacío (incluso si contiene solo espacios).
- Visualizar en tiempo real la lista actualizada de nombres.
- Disparar la acción de agregar mediante el botón o presionando la tecla Enter.
- Limpiar el campo de entrada tras agregar un nombre.

## Características

- **Ingreso de nombres:** Los usuarios pueden ingresar nombres en un campo de texto.
- **Validación de entradas:** Se verifica que el nombre ingresado no esté vacío.
- **Actualización dinámica:** La lista de amigos se muestra en un elemento HTML mediante la manipulación del DOM.
- **Evento Enter:** La aplicación captura la tecla Enter para disparar el evento de agregar nombre.
- **Interfaz limpia:** Se limpia el campo de entrada después de cada inserción.

## Tecnologías Utilizadas

- **HTML5:** Para la estructura y el contenido de la aplicación.
- **CSS3:** Para el diseño visual y el estilizado, incluyendo el logo.
- **JavaScript:** Para la lógica de negocio, manejo del DOM y validación de entradas.

## Instalación y Uso

1. **Clona/descarga el repositorio ó visualizalo a través de GitHub Pages**  
   

2. **Abre el archivo `index.html` en tu navegador:**  
   Simplemente haz doble clic en el archivo `index.html` o utiliza un servidor local para visualizar la aplicación

3. **Uso de la Aplicación:**  
   - Escribe un nombre en el campo de entrada.
   - Presiona el botón "Agregar" o la tecla Enter para registrar el nombre.
   - Observa cómo la lista de amigos secretos se actualiza dinámicamente en la página.

## Estructura del Proyecto

- **index.html** – Contiene la estructura HTML de la aplicación y el logo.
- **style.css** – Define los estilos para el logo y la interfaz.
- **app.js** – Implementa la lógica de JavaScript para agregar nombres, validar entradas y manejar eventos.
