import React from 'react';
import AboutUs from "@/app/components/mainContainer/aboutUs/aboutUs";
import Products from "@/app/components/mainContainer/products/products";
import Services from "@/app/components/mainContainer/services/services";
import Blog from "@/app/components/mainContainer/FAQ/FAQ";
import ProductDetails from "@/app/components/mainContainer/products/productDetails/productDetails";
import FAQ from "@/app/components/mainContainer/FAQ/FAQ";

function MainContainer() {
    return (
        <div>
            <AboutUs/>
            <Services/>
            <Products/>
            <FAQ/>
            {/*<ProductDetails/>*/}
        </div>
    );
}

export default MainContainer;
