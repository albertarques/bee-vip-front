import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CategorySingleCard from '../components/partials/CategoryCard/CategorySingleCard'
import JuanValdezAvatar from '../assets/juanvaldezavatar.png'
import CommentCard from '../components/partials/CommentCard/CommentCard'

export default function SingleEntrepreneurship() {
  return (
    <div>
      <Navbar />
        <main>
          <CategorySingleCard />

          <section className="p-2 flex flex-col gap-3">
            <h2 className="font-semibold font-title text-medium">Gestionado por</h2>
            <div className="flex flex-row gap-4">
              <img src={JuanValdezAvatar} className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full" alt="avatar" />
              <h2 className="mt-8 font-medium font-title text-sm">Juan Valdez</h2>
            </div>
          </section>

          <h2 className="p-2 font-semibold font-title text-medium">Opiniones</h2>
          <CommentCard />
        </main>
      <Footer />
    </div>
  )
}
