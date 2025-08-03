import React, { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductCard from "./components/ProductCard";
import ProductDetailModal from "./components/ProductDetailModal";
import CartModal from "./components/CartModal";
import { fetchProducts } from "./api";
import { CartContext } from "./context/CartContext";
import { Box, Grid, Typography } from "@mui/material";

const App = () => {
  const { searchText } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data));
  }, []);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Navbar onCartClick={() => setCartOpen(true)} />
      <Box sx={{ backgroundColor: "#FFF2E0", minHeight: "100vh", px: 2 }}>
        <Carousel />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Latest Deal’s for you
        </Typography>
        <Grid container>
          {filtered.map((product) => (
            <Grid item key={product.id}>
              <ProductCard product={product} onView={setSelected} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ProductDetailModal
        open={!!selected}
        handleClose={() => setSelected(null)}
        product={selected}
      />
      <CartModal open={cartOpen} handleClose={() => setCartOpen(false)} />
    </>
  );
};

export default App;
