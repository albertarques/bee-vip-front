import React from "react"
import PaymentComponent from "./PaymentComponent"
import PaymentMethodAlert from "./PaymentMethodAlert"
import PaymentMethodAlert2 from "./PaymentMethosAlert2"
import SelectType from "./SelectType"

export default function CreateEntrepreneurshipForm() {
  return (
    <section className="bg-gray-50 dark:bg-yellow-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" action="#">
              <SelectType />
              
              <label
                className="block mb-2 text-base text-gray-900 dark:text-slate-900 font-title font-semibold"
                for="user_avatar"
              >
                Selecciona el método de pago
              </label>
              <PaymentComponent />
              <PaymentMethodAlert />
              <PaymentMethodAlert2 />

              <label
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                for="user_avatar"
              >
                Añadir logotipo del negocio
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />

              <label
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                for="user_avatar"
              >
                Añadir imagen del producto
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />

              <label
                for="message"
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
              >
                Descripción del producto o negocio
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Máximo 100 palabras"
              ></textarea>
              <div className="mb-6">
                <label
                  for="default-input"
                  className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                >
                  Precio
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ej. 25.00€"
                />
              </div>

              <button
                type="button"
                className="focus:outline-none text-slate-50 bg-blue-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Registrar Negocio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
