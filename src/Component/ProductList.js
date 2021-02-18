import React from 'react';
import '../App.css';
 import Appbar from './Appbar'
import Grid from '@material-ui/core/Grid';
import {  Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function ProductList() {

    const shoes = {
        "nike 1": {
            name : "FIEST 1",
            img : "/images/nike5.jpg",
            price: "RS 250"
        },
    
        "nike 2": {
            name: "NIKE 2",
            img : "/images/nike6.jpg",
            price: "RS 300"
        },
    
        "nike 3 ": {
            name: "TORONTO BLAST",
            img : "/images/nike7.jpg",
            price: "RS 350"
        },
    
        "nike 4": {
            name: "JAGUAR 4",
            img : "/images/nike8.jpg",
            price : "RS 400"
        },
        " nike 5": {
            name: "GUZANA",
            img : "/images/nike9.jpg",
            price : "RS 450"
        },
        "nike 6": {
            name: "RUNNER ALP",
            img : "/images/nike10.jpg",
            price : "RS 500"
        },
    }
    return (
      <div>
         <Appbar />
         <Grid container spacing={3} >
             {Object.entries(shoes).map(([productkey,{name,img,price}])=>(
            <Grid item xs key={productkey}>
                        <img class="image5" src = {img} alt={name}></img>
                        <h2 class="text">{name}</h2>
                        <h4 class="text">{price}</h4>
                    <Link class="link" to={productkey}>
                        <Button class="button">ADD TO CART</Button>
                    </Link>
            </Grid>
        
           ))}
        </Grid>
      </div>
    );
  }
  
  export default ProductList;