import { useState } from "react";
import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signInWithPopup,
  GoogleAuthProvider, 
  GithubAuthProvider 
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { 
  TextField, 
  Button, 
  Container, 
  Typography, 
  Alert 
} from "@mui/material";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [resetEmail, setResetEmail] = useState(""); 
  const navigate = useNavigate();

  // Proveedores de autenticación
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Inicio de sesión con email y contraseña
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Bienvenido, ¡has iniciado sesión!");
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  // Autenticación con Google
  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert(`Bienvenido ${result.user.displayName}`);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  // Autenticación con GitHub
  const handleGithubAuth = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      alert(`Bienvenido ${result.user.displayName}`);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("Te hemos enviado un enlace para restablecer la contraseña.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Login
      </Typography>

      {/* Formulario de Login */}
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Iniciar sesión
        </Button>
      </form>

      {/* Botón de Registro */}
      <Button
        onClick={() => navigate("/register")}
        fullWidth
        variant="outlined"
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Registrarse
      </Button>

      <Button
  onClick={handleGoogleAuth}
  fullWidth
  variant="contained"
  color="error"
  style={{ marginTop: "10px", display: "flex", alignItems: "center" }} // Asegura que el ícono y texto estén alineados
>
  {/* Ícono de Google */}
  <i className="bi bi-google" style={{ marginRight: "8px" }}></i>
  Iniciar sesión con Google
</Button>

      {/* Login con GitHub */}
      <Button
        onClick={handleGithubAuth}
        fullWidth
        variant="contained"
        color="secondary"
        style={{ marginTop: "10px" }}
      >
        Iniciar sesión con GitHub
      </Button>

      
      <div style={{ marginTop: "10px" }}>
        <TextField
          label="Email para restablecer contraseña"
          type="email"
          fullWidth
          variant="outlined"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          margin="normal"
        />
        <Button
          onClick={handlePasswordReset}
          fullWidth
          variant="outlined"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Restablecer contraseña
        </Button>
      </div>

   
      {error && (
        <Alert severity="error" style={{ marginTop: "20px" }}>
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default Login;
