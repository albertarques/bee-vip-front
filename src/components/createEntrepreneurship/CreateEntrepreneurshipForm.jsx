import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentComponent from "./PaymentComponent";
import PaymentMethodAlert from "./PaymentMethodAlert";
import PaymentMethodAlert2 from "./PaymentMethosAlert2";
import { createEntrepreneurship } from "../../services/entrepreneurships.service";

export default function CreateEntrepreneurshipForm() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(image);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('product_img', image);
      formData.append('price', price);
      formData.append('category_id', 1);

      const { data } = await createEntrepreneurship(formData);
      console.log(data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu emprendimiento se ha creado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ha habido un problema, prueba de nuevo!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-yellow-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
              encType="multipart/form-data"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-title font-semibold text-gray-900 dark:text-slate-900"
                >
                  Nombre
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu nombre..."
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-base font-title font-semibold text-gray-900 dark:text-slate-900"
                >
                  Nombre de tu servicio o producto
                </label>
                <input
                  type="title"
                  title="title"
                  id="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre de tu servicio o producto..."
                  required=""
                />
              </div>

              <label
                className="block mb-2 text-base text-gray-900 dark:text-slate-900 font-title font-semibold"
                htmlFor="user_avatar"
              >
                Selecciona el método de pago
              </label>
              <PaymentComponent />
              <PaymentMethodAlert />
              <PaymentMethodAlert2 />

              {/* <label
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                htmlFor="user_avatar"
              >
                Añadir logotipo del negocio
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                value={logo}
                onChange={(event) => setLogo(event.target.value)}
              /> */}

              <label
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                htmlFor="user_avatar"
              >
                Añadir imagen del producto
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
                onChange={(event) => setImage(event.target.files[0])}
              />

              <label
                htmlFor="message"
                className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
              >
                Descripción del producto o negocio
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-500 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Máximo 100 palabras"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
              <div className="mb-6">
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-base font-semibold text-gray-900 dark:text-slate-900"
                >
                  Precio
                </label>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Pon el precio de tu producto..."
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>

              <button
                type="submit"
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
