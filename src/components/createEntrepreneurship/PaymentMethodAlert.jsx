import React, { useState } from 'react';

export default function PaymentMethodAlert() {
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
  }

  function handleClose() {
    setShowAlert(false);
  }

  return (
    <div>
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>Bizum</button>
      {showAlert && (
        <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span class="font-medium">BeeVip:</span> <br />
          Este método de pago aún no está disponible. <br /> <br />
          <button onClick={handleClose}>Cerrar</button>
        </div>
      )}
    </div>
  );
}
