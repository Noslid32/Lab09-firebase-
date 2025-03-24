# React Firebase Authentication

Este es un proyecto de autenticación de usuario usando React y Firebase. La aplicación permite a los usuarios registrarse, iniciar sesión, restablecer contraseñas y acceder a un dashboard protegido. Además, se integra con proveedores de autenticación federada, como Google y GitHub.

## Funcionalidades

- **Registro de Usuario**: Los usuarios pueden registrarse utilizando su correo electrónico y contraseña.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña, o mediante Google y GitHub.
- **Restablecimiento de Contraseña**: Los usuarios pueden solicitar un enlace para restablecer su contraseña.
- **Dashboard Protegido**: Solo los usuarios autenticados pueden acceder al dashboard.
- **Autenticación Federada**: El proyecto integra autenticación con Google y GitHub.
  
## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir la interfaz de usuario.
- **Firebase Authentication**: Para gestionar el registro, inicio de sesión, restablecimiento de contraseñas y autenticación federada.
- **Material-UI**: Framework de componentes para estilizar la interfaz de usuario.
- **React Router**: Para gestionar la navegación entre las diferentes páginas de la aplicación.
- **Bootstrap Icons**: Para agregar iconos a los botones de inicio de sesión con Google y GitHub.

## Configuración del Proyecto

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/react-firebase-authentication.git
Instalar las dependencias:

Dentro del directorio del proyecto, ejecuta:

npm install
Configurar Firebase:

Para conectar la aplicación a Firebase, crea un proyecto en la Consola de Firebase y obtén tu configuración de Firebase.

Crea un archivo llamado env. dentro de la carpeta src y agrega el siguiente código:


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
Asegúrate de reemplazar los valores con tu configuración de Firebase.

Iniciar la aplicación:

Ejecuta el siguiente comando para iniciar la aplicación en el entorno de desarrollo:


npm start
La aplicación estará disponible en http://localhost3000.

Rutas y Componentes
/login: Página de inicio de sesión donde los usuarios pueden ingresar con su correo electrónico, contraseña o a través de Google y GitHub.

/register: Página de registro de usuario para crear una cuenta con correo electrónico y contraseña.

/dashboard: Página protegida que solo pueden acceder los usuarios autenticados.

/reset-password: Página para restablecer la contraseña de un usuario.

demo en codesanbox:https://psp7dy.csb.app/login


