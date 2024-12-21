import React from 'react';
import AboutUs from "@/app/components/mainContainer/aboutUs";
import Products from "@/app/components/mainContainer/products";
import Services from "@/app/components/mainContainer/services";
import FAQ from "@/app/components/mainContainer/FAQ";

function MainContainer() {
    return (
        <div>
            <AboutUs/>
            <Services/>
            <Products/>
            <FAQ/>
        </div>
    );
}

export default MainContainer;
