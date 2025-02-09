
Lunes 2025/01/27
API REST con Node.js y Express

# Evaluación Técnica: "Mini API o Aplicación Dinámica"

# Desarrolar Api Rest con Nodejs y Express


Enunciado de la evaluación técnica:

Crea una pequeña aplicación o servicio que permita realizar lo siguiente:

1. Registrar usuarios: Los datos del usuario deben incluir al menos nombre, correo
electrónico y edad.
2. Listar usuarios registrados: Devuelve todos los usuarios registrados.

# Resolución de la evaluación By Olga Viviana

Estructura del proyecto NodeJS y Express

    plaintext
    - myapi/
    - node_modules/
    - app.js

#--------------------------------------

Paso 1: Instalar Node.js y npm

Primero, necesito tener Node.js y npm (Node Package Manager) instalados en mi máquina. Puedo descargarlos desde la página oficial de Node.js.

#--------------------------------------

Paso 2: Crear el proyecto
1.	Abrir una terminal o línea de comandos.
2.	Crea un nuevo directorio para mi proyecto y navega hacia él:

    bash
    mkdir myapi
    cd myapi


3.	Inicializa un nuevo proyecto de Node.js:

    bash
    npm init -y

Esto creará un archivo package.json con la configuración predeterminada.

#--------------------------------------

Paso 3: Instalar Express
Instalar Express y Body-Parser (para manejar peticiones JSON):
    bash
    npm install express body-parser

#--------------------------------------
 
Paso 4: Crear el archivo principal
Crea un archivo llamado app.js en el directorio de tu proyecto:
    bash
    touch app.js

#--------------------------------------

Paso 5: Escribir el código
Abrir el archivo app.js para editar y escribir el siguiente código.

#--------------------------------------

Paso 6: Ejecutar el servidor
En la terminal, ejecutar el siguiente comando para iniciar el servidor:
    bash
    node app.js

Aparecera un mensaje indicando que la API está escuchando en http://localhost:3000.

 #--------------------------------------

Paso 7: Probar la API

Utilizare la herramienta Postman para probar los endpoints. 
En Postman probare registrar usuarios:

•	Registrar un usuario (POST /usuarios)

    json
    {
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "edad": 25
    }
        
En Postman probare listar usuarios existentes:

•	Listar usuarios registrados (GET /usuarios) Simplemente realiza una petición GET a http://localhost:3000/usuarios.
 
#--------------------------------------

Para detener el servidor que hemos iniciado con Node.js, solo hay que ir a la terminal, línea de comandos, y presionar Ctrl + C.
 
Esto enviará una señal de interrupción (SIGINT) a Node.js, lo cual detendrá el proceso del servidor.
Si más adelante deseamos reiniciar el servidor, simplemente ejecutaremos el comando "node app.js" de nuevo.

#--------------------------------------

Subir proyecto a GITHUB

Ingreso a mi cuenta de GITHUB.
Selecciono crear nuevo repositorio “api.rest.nodejs.express”.

En la terminal de Visual Studio escribo “git init” y luego enter.

Escribo “echo "# api.rest.nodejs.express" >> README.md” para crear un nuevo archivo dentro de mi proyecto.

Para añadir el archivo "README.md" al control de versiones ejecuto los siguientes comandos en la terminar de Visual estudio:

    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https://github.com/vdviviana/api.rest.nodejs.express.git
    git push -u origin main
 
Creo el archivo “.gitignore” para agregar librerías y dependencias.

Para añadir el archivo “.gitignore”  al control de versiones ejecuto los siguientes comandos en la terminar de Visual estudio:

    git add .gitignore
    git commit -m "Añadiendo .gitignore para excluir dependencias y archivos innecesarios"
    git push

Para añadir el resto de todo el proyecto (el archivo app.js y los archivos .json) al Repositorio, escribo en la terminal de Visual Studio los siguientes comandos:

    git add .
    git commit -m "Subiendo los archivos app.js y .json primera versión"
    git push


#-------------- FIN ٩(˘◡˘)۶ ------------------------
