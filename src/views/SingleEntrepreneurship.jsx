import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import CategorySingleCard from '../components/partials/CategoryCard/CategorySingleCard'
import JuanValdezAvatar from '../assets/juanvaldezavatar.png'
import CommentCard from '../components/partials/CommentCard/CommentCard'
import ProductCard from '../components/partials/ProductCard/ProductCard'

export default function SingleEntrepreneurship() {
  const { id } = useParams()

  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/api/entrepreneurship/${id}`);
      const serviceData = response.data
      setPost(serviceData.entrepreneurship);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
        <main>
          <CategorySingleCard title={post.title}/>

          <ProductCard rating={post.avg_score} title={post.title} description={post.description} price={post.price}/>
          
          <section className="p-2 flex flex-col gap-3">
            <h2 className="font-semibold font-title text-medium">Gestionado por</h2>
            <div className="flex flex-row gap-4">
              <img src={JuanValdezAvatar} className="m-2 object-cover w-auto h-auto border-2 border-blue-700 rounded-full" alt="avatar" />
              <h2 className="mt-8 font-medium font-title text-sm">{post.name}</h2>
            </div>
          </section>

          <h2 className="p-2 font-semibold font-title text-medium">Opiniones</h2>
          <CommentCard />
        </main>
      <Footer />
    </div>
  )
}
