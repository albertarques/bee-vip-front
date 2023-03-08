import React from 'react'

export default function CategoryPopularSlider(props) {
  return (
    <div key={props.id} className="relative flex-shrink-0 w-64 h-full">
      <img src={props.image} alt="coffee" className="rounded object-cover" />
      <h3 className="absolute top-4 left-4 text-lg text-slate-100 font-semibold">{props.title}</h3>
    </div>
  )
}
