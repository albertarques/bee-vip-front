import React from 'react'

export default function CategoryPopularSlider({ id, image, title }) {
  return (
    <div key={id} className="relative flex-shrink-0 w-64 h-full">
      <img src={image} alt="coffee" className="rounded object-cover w-full h-full" />
      <h3 className="absolute top-4 left-4 text-lg text-slate-100 font-semibold">{title}</h3>
    </div>
  )
}
