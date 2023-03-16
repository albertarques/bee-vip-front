import React from 'react'

export default function CategoryMainSlider(props) {
  return (
    <div key={props.id} className="relative flex-shrink-0">
      <button className="mr-2 px-4 py-2 rounded text-base text-slate-100 font-semibold bg-blue-700 active:bg-blue-700 active:text-slate-100">{props.name}</button>
    </div>
  )
}
