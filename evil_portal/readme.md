# Evil Portal (Evil Twin Attack)
Para mis auditorias a redes inalambricas utilizo la herramienta WEF (WiFi Exploitation Framework) para crear mi Access Point y usar mis propios diseños web para obtener datos.

### Observaciones
El portal no abrirá aunque se conecten al AP (Access Point) si se está utilizando el puerto 80.
- No utilizar un servidor local mientras se audita ya que el servidor local utiliza el puerto 80
- No abre por default el portal en iPhone

## Creación de nueva plantilla
Se necesitan 3 componentes clave:

1. Portal web (HTML, CSS, JS)
2. login.php (con PHP se reciben datos del portal y se escriben en un archivo.txt)
3. file.txt (guarda en texto plano los datos que haya mandado el usuario)

## Instalación de nueva plantilla
Al instalar WEF se crea una carpeta en /opt/wef, se debe editar el archivo wef.

1. En la linea 1542 se encuentra un listado de opciones, agregar el nombre de tu nueva plantilla.
2. En la linea 1629 function checkCreds() se guardan las variables con su función de escritura en un archivo en concreto, crear una variable nueva con nombre de tu misma plantilla.
    1. De recomendación copiar instagram y editar a nuevo nombre de plantilla.
    2. Indicar el nombre del archivo donde se va a escribir.
3. Revisa que el nombre del archivo que guardará los datos sea el mismo que esta en tu nueva plantilla.
4. Más abajo se crean varias sentencias IF, crear la propia copiando instagram, cambia nombres de variable a la de tu nueva plantilla.