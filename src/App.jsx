import Navbar from "./Componen/Navbar"
import Hero from "./Componen/Hero"
import Tentang from "./Componen/Tentang"
import ShortCart from "./Componen/ListProduk"
import Coffee from "./Componen/CoffeeMenu"
import Footer from "./Componen/Footer"

import 'remixicon/fonts/remixicon.css'
import Kontak from "./Componen/Kontak"
import CTA from "./Componen/CTA"


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />

      <ShortCart />
      <Coffee />
      <CTA />
      <Kontak />

      <Footer />


    </>
  )
}

export default App

