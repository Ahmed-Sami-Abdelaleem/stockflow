"use client";

import { useFilterStore } from "../stores/filter/filter";
import { useEffect } from "react";
import Card from "./card";
const ProductsSection = () => {
     const { 
        filteredProducts, 
        fetchProducts, 
      
        applyFilters,
        isLoading,
        error
      } = useFilterStore();
    
      useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);
    
      useEffect(() => {
        applyFilters();
      }, [applyFilters]);
    
      if (isLoading) return <div>Loading products...</div>;
      if (error) return <div>Error: {error}</div>;
    
     
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
             {filteredProducts.map((product) => (
               <Card product={product} key={product.id} />
             ))}
           </div>
  )
}

export default ProductsSection