import React from "react"
import Hero from "../../components/home/Hero"
import FeaturedList from "../../components/home/FeaturedList"
import Blog from "../../components/home/Blog"
import Testimonials from "../../components/home/Testimonials"
import Gallery from "../../components/home/Gallery"



export default function Home() {
  return (
    <>
    <div className="px-10 bg-[var(--beige)]" >
      <Hero />
      <FeaturedList />
      <Blog/>
      <Testimonials />
    </div>
    <Gallery />
    </>
  )
}