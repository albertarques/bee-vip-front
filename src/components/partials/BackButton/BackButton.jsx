import React from 'react'
import { Link } from "react-router-dom"

export default function BackButton() {
  return (
    <div className="mt-3 text-base font-medium">
      <Link to='/'>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  )
}
