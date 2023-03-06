import React from 'react'
import img1 from '../../assets/coffee.jpg'
import img2 from '../../assets/juanvaldezavatar.png'

function AproveOrDeny() {
return (
    <div class="px-3">
        <div class="max-w-m bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={img1} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Café Colombiano</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">El mejor café colombiano a la puertecita de su casa.
                Seleccionado y tostado con afecto.</p>
                
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Descripción
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Unidad
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Categoría
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Precio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Café Arabica
                                </th>
                                <td class="px-6 py-4">
                                    1 Kilo
                                </td>
                                <td class="px-6 py-4">
                                    café
                                </td>
                                <td class="px-6 py-4">
                                    € 9.99
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Café Robusto
                                </th>
                                <td class="px-6 py-4">
                                    1/2 Kilo
                                </td>
                                <td class="px-6 py-4">
                                    Café
                                </td>
                                <td class="px-6 py-4">
                                    € 5.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <br />
                <h4 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Sobre el emprendedor:</h4>
                            
                <div class="w-full max-w-m bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <br />
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={img2} alt="Bonnie image"/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Juan Valdez</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Emprendedor Colombiano</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Perfil</a>
                        </div>
                    </div>
                </div>
                <br />
                <a href="#" class="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Aprovar  
                </a>
                <a href="#" class="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Denegar                 
                </a>
                <a href="#" class="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Revisar después                 
                </a>
            </div>
        </div>
        <br />
    </div>
)
}

export default AproveOrDeny