import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import FeaturedList from "../components/FeaturedList"
import CategoriesList from "../components/CategoriesList"
import Testimonials from "../components/Testimonials"
import Gallery from "../components/Gallery"
// import Header from "../components/Header"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedList />
      <CategoriesList />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  )
}