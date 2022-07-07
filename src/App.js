import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Rooms from './components/Rooms';
import Footer from './components/Footer';
import { Container, Typography } from "@mui/material";
import Order from "./components/Order";





function App() {
  return (
    <>
     
    <Navbar />
    <Header />
    <Services />
    <Pricing />
    <Rooms />
    <Footer />
    <Container maxWidth="md">
      <Typography
      gutterBottom
      variant="h2"
      align ="center">
        Restaurant App
      </Typography>
      <Order />
    </Container>

  
    

    
    </>
  );
}

export default App;