import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col bg-red-700 text-center text-slate-100 align-center gap-2">
      <h3 className="mt-4 italic font-title font-semibold text-sm">BeeVip!</h3>
      <p className="font-sans font-normal text-xs">© BeeVip! International Ltd. 2023</p>
      <div className="text-lg mb-4 flex flex-row justify-center gap-4">
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"> <i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  )
}
