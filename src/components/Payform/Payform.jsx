import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payform.scss';

const Payform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si los campos del formulario están vacíos
    if (
      formData.cardNumber === '' ||
      formData.cardHolder === '' ||
      formData.expirationDate === '' ||
      formData.cvv === ''
    ) {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    console.log(formData);
    // Aquí puedes realizar cualquier lógica adicional con los datos de pago
    // Por ejemplo, enviar los datos a un servidor, validar la tarjeta, etc.
    // Puedes agregar la lógica que necesites en esta función.

    // Redirigir a la página de pago exitoso después de validar los datos
    navigate('/OrderSuccessful');
  };

  return (
    <div className="payform-container">
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Ingrese el número de tarjeta"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Titular de la Tarjeta:</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            placeholder="Ingrese el titular de la tarjeta"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Fecha de Vencimiento:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            placeholder="MM/AA"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Ingrese el código CVV"
            required
          />
        </div>
        <button type="submit">Realizar Pago</button>
      </form>
    </div>
  );
};

export default Payform;
