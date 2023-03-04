import React from 'react'

export default function CategoryMainSlider() {
  return (
    <div className="flex flex-row mt-4 mb-4 overflow-x-scroll">
      <div className="relative flex-shrink-0">
        <button className="mr-2 px-4 py-2 rounded text-base text-slate-100 font-semibold bg-blue-700 active:bg-blue-700 active:text-slate-100">Alimentación</button>
        <button className="mr-2 px-4 py-2 rounded text-base font-semibold text-slate-900 bg-yellow-400 active:bg-blue-700 active:text-slate-100">Bricolaje</button>
        <button className="mr-2 px-4 py-2 rounded text-base font-semibold text-slate-900 bg-yellow-400 active:bg-blue-700 active:text-slate-100">Diseño</button>
        <button className="mr-2 px-4 py-2 rounded text-base font-semibold text-slate-900 bg-yellow-400 active:bg-blue-700 active:text-slate-100">Desarrollo</button>
      </div>
    </div>
  )
}
