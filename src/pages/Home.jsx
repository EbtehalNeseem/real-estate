import React from "react"

import Hero from "../components/Hero"
import FeaturedList from "../components/FeaturedList"
import CategoriesList from "../components/CategoriesList"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedList />
      <CategoriesList />
      <About />
      <Testimonials />
      <Contact />
      <Gallery />
      <Footer />
    </>
  )
}