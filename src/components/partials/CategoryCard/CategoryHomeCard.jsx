import React from 'react'
import Coffee from '../../../assets/coffee.jpg'

export default function CategoryHomeCard() {
  return (
    <>
      <div className="flex flex-row mt-4 mb-4">
        <div className="relative flex-shrink-0 w-full h-full">
          <img src={Coffee} alt="coffee" className="object-cover h-24 rounded w-full" />
          <div className="absolute top-0 h-full w-44 opacity-80 bg-yellow-400">&nbsp;</div>
          <h3 className="absolute w-36 top-4 left-4 text-slate-900 font-semibold text-body">Café colombiano a domicilio</h3>
        </div>
      </div>
      
      <div className="flex flex-row mt-4 mb-4">
        <div className="relative flex-shrink-0 w-full h-full">
          <img src={Coffee} alt="coffee" className="object-cover h-24 rounded w-full" />
          <div className="absolute top-0 h-full w-44 opacity-80 bg-yellow-400">&nbsp;</div>
          <h3 className="absolute w-36 top-4 left-4 text-slate-900 font-semibold text-body">Arepas recién hechas</h3>
        </div>
      </div>

      <div className="flex flex-row mt-4 mb-4">
        <div className="relative flex-shrink-0 w-full h-full">
          <img src={Coffee} alt="coffee" className="object-cover h-24 rounded w-full" />
          <div className="absolute top-0 h-full w-44 opacity-80 bg-yellow-400">&nbsp;</div>
          <h3 className="absolute w-36 top-4 left-4 text-slate-900 font-semibold text-body">Carne bien bacana parce</h3>
        </div>
      </div>
    </>
  )
}
