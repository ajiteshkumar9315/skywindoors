import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
// import Home from './Component/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Feedback from './Component/Feedback/Feedback';
import Partner from './Component/Partner/Partner';

function App() { 
  return (
    <>
      <Navbar/>
      <Product/>
      <About />
      <Partner />
      <Feedback/>
      <Contact/>
      <Footer />

{/* <Router>
      <Navbar/>
      <Product/>
      <About />
      <Form/>
      <Footer/>
    <Routes>
         
           <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/Product" element={<Product/>}>
          </Route>
          <Route exact path="/About" element={<About />}>
          </Route>
          <Route exact path="/Form" element={<Form />}>
          </Route>
          <Route exact path="/Footer" element={<Footer/>}>
          </Route>

        </Routes>
        
    </Router> */}
    </>
  );
}

export default App;
