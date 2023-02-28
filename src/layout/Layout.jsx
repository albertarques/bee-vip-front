import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../views/Home'
import Entrepreneurships from '../views/Entrepreneurships'
import SingleEntrepreneurship from '../views/SingleEntrepreneurship'

function Layout() {
  return (
    <div>
      <Navbar />
        <main>
          <Home />
        </main>
      <Footer />
    </div>
  )
}

export default Layout