•	Descripción:
Aplicación backend que contiene rutas para servir a aplicación que muestra información acerca del clima en Chile.  Contiene 3 rutas (POST) ‘api/v1/clima’ la cual sirve para crear un nuevo documento, (GET) ‘api/v1/clima’ la cual sirve para mostrar todos los documentos de la base de datos y (GET) ’api/v1/clima/:codigo’ la cual sirve para mostrar un documento en específico dado un código.
•	Instrucciones para reconstruir la Aplicación:

1.	Clonar repositorio.
2.	Ir al directorio raíz, abrir la terminal o consola de comandos y escribir: “npm install”.
3.	Una vez reconstruidos los Módulos de Node, escribir: “npm start”
4.	Se requiere el suministrar variables de entorno para que la aplicación pueda conectarse a la base de datos, ya que este repositorio es privado; se muestran a continuación: 

DB_USER = wilder_leon
DB_PASSWORD = oC08uUUxWCm9cg4a
NODE_ENV = development

Dichas variables de entorno se debe especificar en un archivo llamado “.env” y debe estar colocado en el directorio raíz.

Aplicación en vivo desplegada en heroku:
https://mywheaterappchl.herokuapp.com/
