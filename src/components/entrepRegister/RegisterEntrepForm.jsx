import React from 'react'
import PaymentComponent from './PaymentComponent'
import PaymentMethodAlert from './PaymentMethodAlert'
import PaymentMethodAlert2 from './PaymentMethosAlert2'

function RegisterEntrepForm() {
  return (
    <div className='px-4'>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Seleccina el método de pago</label>
        <PaymentComponent/> <br />
        <PaymentMethodAlert/> <br />
        <PaymentMethodAlert2/>
        <br /> <br />
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Añadir logotipo del negocio</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <br />
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Añadir imagen del producto</label>
        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <br />
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripción del producto o negocio</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Máximo 100 palabras"></textarea>
        <div class="mb-6">
        <br />
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='ej. 25.00€'/>
        </div>
        <br />
        <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Registrar Negocio</button>
    </div>
  )
}

export default RegisterEntrepForm