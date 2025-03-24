import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Button, Avatar } from "@mui/material";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //  usuario autenticado
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        
      </Typography>
      {user ? (
        <>
          {user.photoURL ? (
            <Avatar
              src={user.photoURL}
              alt="Perfil"
              sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}
            />
          ) : (
            <Avatar sx={{ width: 100, height: 100, margin: "auto", mb: 2 }}>
              {user.email.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <Typography variant="h6">Email: {user.email}</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            style={{ marginTop: "20px" }}
          >
            Logout
          </Button>
        </>
      ) : (
        <Typography variant="h6">No estás autenticado.</Typography>
      )}
    </Container>
  );
};

export default Dashboard;
