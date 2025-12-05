import React from "react"
import Hero from "../components/home/Hero"
import FeaturedList from "../components/home/FeaturedList"
import Testimonials from "../components/home/Testimonials"
import Gallery from "../components/home/Gallery"
import About from "../components/home/About"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
import Blog from "../components/home/Blog"


export default function Home() {
  return (
    <>
    <div className="px-10 bg-color-[--secondary]" >
      <Hero />
      <FeaturedList />
      <Blog/>
      <About />
      <Testimonials />
      <Contact />
    </div>
    <Gallery />
    <Footer />
    </>
  )
}