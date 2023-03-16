import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { register } from "../services/user.service";


export default function RegisterG() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const { setUserStorage } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        username: username,
        email: email,
        password: password,
        phone: phone,
      };

      const { data } = await register(formData);
      console.log(data);
      const userObject = {
        token: data.authorisation.token,
        id: data.user.id,
        user: data.user.username,
        email: data.user.email,
        phone: data.user.phone,
        userToken: data.user.token,
      };
      console.log(userObject, "user data adapter");
      setUserStorage(userObject);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Te has registrado con éxito!",
        showConfirmButton: false,
        timer: 2000,
      });
      setIsRegistered(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Delay the navigation for 2 seconds (2000 milliseconds)
    } catch (error) {
      setMessage(error.response.data.message);
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
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-50 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-slate-900">
              Crea tu cuenta
            </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900"
                >
                  Nombre
                </label>
                <input
                  type="username"
                  username="username"
                  id="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tu nombre..."
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900"
                >
                  Tu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="beevip@gmail.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900"
                >
                  Teléfono
                </label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999999999"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              {/* <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">Confirmar contraseña</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div> */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-200 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-slate-600"
                  >
                    Acepto los{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-blue-500"
                      href="#"
                    >
                      Términos y Condiciones
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Crear cuenta
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Ya tienes una cuenta?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-blue-500"
                >
                  Inicia sesión aquí
                </a>
              </p>
            </form>
            {/* {message && <p className="text-red-500">{message}</p>} */}
          </div>
        </div>
      </div>
    </section>
  );
}
