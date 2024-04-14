import styles from "./style";
import { Billing, Business, CardDeal, CTA, Footer, Navbar, Stats, Hero} from "./components";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <Navbar />
        <BrowserRouter>
        
        <Routes>
     
       

          <Route path="/dashboard" element={<Dashboard />} />
  
        </Routes>
        </BrowserRouter>

      </div>
      
    </div>
    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
  


    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <CTA />
        <Dashboard/>
        
        <Footer />
      </div>
    </div>
  </div>
  
);
}

export default App;
