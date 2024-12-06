import React from "react";
import { Grid } from "@mui/material";
import ProductCardListening from "./ProductCardListening";

const ProductGrid = ({ products }) => (
  <Grid container spacing={3}>
    {products.map((product, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <ProductCardListening product={product} />
      </Grid>
    ))}
  </Grid>
);

export default ProductGrid;
