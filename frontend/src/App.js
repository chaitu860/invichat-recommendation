import "./App.css";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Navbar from "./components/Navbar.js";
import Partners from "./components/Partners";
import Features from "./components/Features";
import products_rec from "./json_files/products_rec";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { display } from "@mui/system";
//  C:\Users\Chait\Documents\uda\InviChat\api> npx json-server --watch 
// database.jsons
function App() {
  const [data, setData] = useState(null);
  const [isLoggedin,setLogin]=useState(false);

  const[showPage,setPage]=useState(false);
  const [DataisLoaded, setDataLoaded] = useState(false);
// json-server --watch db.json --port 8000
  const main_product="2699";
  useEffect(() => {
    function fetchProducts() {
      axios
      //http://localhost:3000/products
        .get("http://localhost:3000/products")
        .then((response) => {
          console.log(response.data);
          console.log(products_rec["2697"])
          setData(response.data);
          setDataLoaded(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchProducts();
  }, []);

  if (!DataisLoaded)
    return (
      <div className="flex flex-col items-center">
        <p className="text-3xl font-inter text-black font-semibold">
          Please wait while we load the products for you!
        </p>
      </div>
    );

 function isInclude(value){
  
      var i=0;
    for( i=0;i<products_rec[main_product].length;i++){
        if (products_rec[main_product][i]==value.ProductId.toString()){
            
            return true;
        }
    }
    return false;
    
}
   const pr=data.filter(isInclude);
  console.log(pr,"answer")
  const productList = pr.map((product, index) => {
    return (
      <Grid item xs={3} key={index}>
        <ProductList
          imagePath={product.ImageURL}
          name={product.ProductTitle}
          // Description={product.Description}
          type={product.ProductType}
          // quantity={product.quantity}
        />
      </Grid>
    );
  });
    console.log(isLoggedin+" "+showPage);
  if(isLoggedin){
  return (
    
    <div className="App">
      <Navbar />
      {/* console.log(showPage); */}
      {/* <Hero />
      <Features /> */} 
      <p id="prod-display" className="text-3xl font-inter text-black">
        Current&nbsp;
        <text className=" italic text-blue-500">Recommendations</text>&nbsp; based on your recent purchase
      </p>
      <br />
      <div>
        <Grid container spacing={2} className="details">
          {productList}
        </Grid>
      </div>
      <br />
      <br />
      <Partners />
      <Contact />
    </div>
    
    
  );
    }

    else if(showPage){
      return(
        <div>
          <Login setRec={()=>setLogin(true)}/>
          
        </div>
        
      )
    }
  else{
    return(
      <div className="App">
      <Navbar />
      {/* <Hero />
      <Features /> */} 
      <p id="prod-display" className="text-3xl font-inter text-black">
        Welcome to&nbsp;
        <text className=" italic text-blue-500">InviChat</text>&nbsp; we are happy to see you here
      </p>
      <div>
      <button class="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins"
          onClick={()=>
          setPage(true)
          
          }
          >
            Signup!
          </button>
      <button class="text-white bg-blue-500 btn hover:bg-blue-600 font-poppins"
          onClick={()=>
          setPage(true)
          
          }
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default App;
