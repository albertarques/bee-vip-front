import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactUs() {
  const form = useRef()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_8v6te28', 'template_bth8jaa', e.target, '1BNwvMFVJLjb9gKOa')
      .then((result) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tu mensaje ha sido enviado con éxito!',
          showConfirmButton: false,
          timer: 2000
        })
      }, (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',  
          title: 'Ha habido un problema, prueba de nuevo!',
          showConfirmButton: false,
          timer: 2000
        })
      })

    e.target.reset()
  }

  return (
    <section className="bg-white dark:bg-slate-50">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 font-title text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-slate-900">Contacto</h2>
          <p className="mb-8 lg:mb-16 font-light font-sans text-center text-gray-500 dark:text-gray-400 sm:text-xl">¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una función beta? ¿Necesita detalles sobre nuestra empresa? Haznos saber.</p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium font-sans text-gray-900 dark:text-slate-700">Tu nombre</label>
                <input type="name" id="fromName" name='fromName' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Escribe aquí tu nombre..." required />
              </div>
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-sans font-medium text-gray-900 dark:text-slate-700">Tu email</label>
                  <input type="email" id="fromEmail" name='fromEmail'className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nombre@beevip.com" required />
              </div>
              <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-sans font-medium text-gray-900 dark:text-slate-700">Tu mensaje</label>
                  <textarea id="message" rows="6" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje..."></textarea>
              </div>
              <button type="submit" mailto='beevipcolombia@gmail.com' className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
          </form>
      </div>
    </section>
  )
}
