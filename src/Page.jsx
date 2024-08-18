

import React from "react";

import HeroSection from "./HeroSection";

import FeaturesSection from "./FeaturesSection";

//import Navbar from "./Navbar";

//import Footer from "./Footer";

import TestimonialsSection from "./TestimonialsSection";

import CTASection from "./CTASection";

import Footer from "./Footer"



export default function Page({username}){

     return(

        <div>

        <HeroSection username={username}/>

        <FeaturesSection/>      
     
     <TestimonialsSection/>

     


     <CTASection/>

     <Footer/>




        </div>







     )





}

















