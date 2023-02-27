import React from 'react'
import Coffee from '../../../assets/coffee.jpg'

export default function CategorySlider() {
  return (
    <div className="flex flex-row gap-2 mt-4 mb-4 overflow-x-scroll">
      <div className="relative flex-shrink-0 w-64 h-full">
        <img src={Coffee} alt="coffee" className="object-cover" />
        <h3 className="absolute top-4 left-4 text-lg text-slate-100 font-semibold">Cafeterías</h3>
      </div>
      <div className="relative flex-shrink-0 w-64 h-full">
        <img src={Coffee} alt="coffee" className="object-cover" />
        <h3 className="absolute top-4 left-4 text-lg text-slate-100 font-semibold">Cafeterías</h3>
      </div>
      <div className="relative flex-shrink-0 w-64 h-full">
        <img src={Coffee} alt="coffee" className="object-cover" />
        <h3 className="absolute top-4 left-4 text-lg text-slate-100 font-semibold">Cafeterías</h3>
      </div>
    </div>
  )
}
