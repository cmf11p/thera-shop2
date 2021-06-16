# Proyecto final curso ReactJS de CoderHouse

El nombre del proyecto es Thera, una tienda ficticia para productos tecnológicos varios.

## Deps:

Se uso en el proyecto:
- [ReactJS](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Funcionalidad

El proyecto cuenta con tres categorias de productos en el navbar:

1. Phones: Para filtrar el catalógo por dispositivos celulares.
2. Tablets: Filtro específico de Tablets.
3. Laptops: Como los anteriores, filtra productos categorizados como Laptops.
4. Cart: El Widget que te permite acceder al Cart.
5. Logo: Este nos permite volver al catálogo (root) del sitio sin filtros.

## Productos

Al ingresar al Home (path: "/") tendremos el listado completo de productos en oferta.
Al acceder a cada producto se va a su página respectiva con información detallada y la capacidad de decidir una cantidad a agregar al carrito.
Se puede filtrar los productos por categorías al usar los botones del NavBar.

## Carrito

Por cada producto seleccionado, el usuario puede ver su carrito de compras, y decidir eliminar un producto determinado del carrito o vaciarlo.
También tiene la opción de volver al catalógo para seguir seleccionando productos.
Por último un botón de CheckOut que nos lleva a una página con una forma para agregar nuestra información y completar la Orden.
Al confirmar la orden se nos lleva a otra página, mostrando la orden completa y el ID de la orden misma.