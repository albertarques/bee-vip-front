import React from 'react'
import { Link } from "react-router-dom"

export default function BackButton() {
  return (
    <div className="mt-3 text-sm font-medium">
      <Link to='/'>
        <i class="fa-solid fa-arrow-left"></i>
        Volver
      </Link>
    </div>
  )
}
