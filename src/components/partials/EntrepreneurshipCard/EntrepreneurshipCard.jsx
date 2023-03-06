import React from "react"
import Coffee from '../../../assets/coffee.jpg'

export default function EntrepreneurshipCard(props) {
  return (
      <div
        key={props.id}
        className="mt-4 max-w-sm sm:max-w-xs bg-dark-blue border border-gray rounded-lg shadow dark:bg-blue dark:border-gray-700"
      >
        <a href="#">
          <img className="rounded-t-lg" src={Coffee} alt="img" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-900">
              {props.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-500">
            {props.description}
          </p>
          <div className="mt-2 flex justify-between">
            <a
              href={`/entrepreneurship/${props.id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-dark-blue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver más
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href={`mailto:${props.email}`}
              className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-white bg-yellow rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
  );
}
