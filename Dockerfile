# Usar la imagen oficial de Node.js
FROM node:18-slim

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json (o yarn.lock) 
# antes de las dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que utilizará tu API
EXPOSE 3000

# Iniciar el servidor de Node.js
CMD ["node", "app.js"]
