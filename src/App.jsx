import Navbar from "./Componen/Navbar"
import Hero from "./Componen/Hero"
import Tentang from "./Componen/Tentang"
import ShortCart from "./Componen/ListProduk"
import Coffee from "./Componen/CoffeeMenu"
import Footer from "./Componen/footer"

import 'remixicon/fonts/remixicon.css'
import Kontak from "./Componen/Kontak"
import CTA from "./Componen/CTA"
import FormKontak from "./Componen/FormContact"

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
      <FormKontak />
      <Footer />


    </>
  )
}

export default App

