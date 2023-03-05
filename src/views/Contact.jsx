import React, { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    // const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${name} (${email}): ${message}`)}`;
    // window.location.href = mailtoLink;
    setIsSent(true)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu mensaje ha sido enviado con éxito!',
      showConfirmButton: false,
      timer: 2000
    })
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')
  }

  return (
    <section class="bg-white dark:bg-slate-50">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-slate-900">Contacto</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">¿Tienes un problema técnico? ¿Quiere enviar comentarios sobre una función beta? ¿Necesita detalles sobre nuestra empresa? Haznos saber.</p>
          <form onSubmit={handleSubmit} class="space-y-8">
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700">Tu nombre</label>
                <input type="name" id="name" value={name} onChange={(event) => setName(event.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Escribe aquí tu nombre..." required />
              </div>
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700">Tu email</label>
                  <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nombre@beevip.com" required />
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700">Asunto</label>
                  <input type="subject" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Escribe tu asunto..." required />
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-700">Tu mensaje</label>
                  <textarea id="message" rows="6" value={message} onChange={(event) => setMessage(event.target.value)} class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-slate-600 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu mensaje..."></textarea>
              </div>
              <button type="submit" mailto='beevipcolombia@gmail.com' class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar mensaje</button>
          </form>
          {/* {isSent && <p>Gracias por tu mensaje!</p>} */}
      </div>
    </section>
  )
}
