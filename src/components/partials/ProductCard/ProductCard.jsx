import React, { useState } from 'react'
import JuanValdezLogo from '../../../assets/juanvaldezlogo.png'
import JuanValdezAvatar from '../../../assets/juanvaldezavatar.png'

export default function ProductCard() {
  const [count, setCount] = useState(1)

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    //lo seteamos de forma que no pueda ir a 0 cuando el decrecimiento
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 1);
      }
    });
  }
  return (
    <div className="flex flex-col p-2 gap-6">
      <section className="flex flex-row justify-between">
        <img src={JuanValdezLogo} alt="logo juan" width='100' />
        <div>
          <i className="fa-solid fa-star"></i>
          <span className="ml-1 font-semibold font-title text-medium">4.5</span>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-semibold font-title text-medium">Café colombiano a domicilio</h2>
        <p className="text-sm font-sans font-normal">El mejor café colombiano a la puertecita de su casa. Seleccionado y tostado con afecto.</p>
      </section>

      <section className="flex flex-row justify-between">
        <h3 className="font-title font-semibold">30€/kg</h3>
        <div className="flex flex-row justify-between border-y border-yellow-400 rounded">
          <button onClick={decrement} className="bg-yellow-400 px-3 rounded-l py-0.5 font-semibold text-lg"><i className="fa-solid fa-minus"></i></button>
          <h2 className="font-semibold font-sans px-3 py-1 text-xl border-y-yellow-400">{count}</h2>
          <button onClick={increment} className="bg-yellow-400 px-3 rounded-r py-0.5 font-semibold text-lg"><i className="fa-solid fa-plus"></i></button>
        </div>
      </section>

      <button className="py-1 rounded font-medium text-slate-100 w-full bg-blue-700">Comprar</button>
    </div>
  )
}
