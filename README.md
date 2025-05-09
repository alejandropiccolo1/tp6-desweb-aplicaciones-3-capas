# TP6 - Desarrollo Web (EAD.DESWEB) - Aplicaciones de Tres Capas

## 👨‍💻 Integrantes
- Alejandro Piccolo

---

## 📦 Aplicación 1: Personas
Permite realizar Alta, Baja y Modificación de personas.  
**Atributos**: Nombre, Apellido, Edad.

Ubicación: `/app1-personas`  
Enlace: [App 1 (Personas)](https://github.com/alejandropiccolo1/tp6-desweb-aplicaciones-3-capas/tree/main/app1-personas)

---

## 🛒 Aplicación 2: Productos
Permite realizar Alta, Baja y Modificación de productos.  
**Atributos**: Nombre, Descripción, Precio.

Ubicación: `/app2-productos`  
Enlace: [App 2 (Productos)](https://github.com/alejandropiccolo1/tp6-desweb-aplicaciones-3-capas/tree/main/app2-productos)

---

## 🔄 Intercambio de Capas

### Cambios realizados:
- Se implementó un archivo `data.json` para gestionar los datos tanto de personas como de productos en ambas aplicaciones.
- La **capa de datos** (anteriormente en memoria) ahora se encuentra modularizada en un archivo compartido entre ambas aplicaciones (`/compartido/datos.js`), permitiendo reutilización y manejo compartido de los datos.
- Se utilizaron funciones como `guardarPersona`, `obtenerPersonas`, `guardarProducto` y `obtenerProductos` para interactuar con los datos almacenados en memoria, simulando una base de datos.

Este enfoque facilita la escalabilidad, la reutilización de código y permite un intercambio eficiente entre las capas de **presentación**, **lógica de negocio** y **acceso a datos**.

---

## 📁 Estructura del Proyecto

