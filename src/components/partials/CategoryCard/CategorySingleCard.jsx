import React from 'react'

export default function CategorySingleCard(props) {
  return (
    <div className="flex flex-row mb-4">
      <div className="relative flex-shrink-0 w-full h-full">
        <img src={props.image} alt="coffee" className="object-cover h-36 w-full" />
        <div className="absolute top-0 h-full w-44 opacity-80 bg-yellow-400 md:w-96">&nbsp;</div>
        <h3 className="absolute w-36 top-4 left-4 text-slate-900 font-semibold text-body md:ml-16 md:text-semibold md:text-2xl">{props.title}</h3>
      </div>
    </div>
  )
}
