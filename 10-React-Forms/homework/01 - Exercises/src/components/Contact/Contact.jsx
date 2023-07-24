import React from 'react';
import { useState } from 'react';
import styles from './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validate(inputs) {
  let errors = {};

  if (!inputs.name) {
    errors.name = 'Se requiere un nombre';
 }
 if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
 }
 if (!inputs.mensaje) {
  errors.mensaje = 'Debe ser un mensaje';
}
return errors
}

export default function Contact () {
  const [inputs, setInputs] = useState({
    name: '',
    mail: "",
    mensaje: "",
 });

 const [errors, setErrors] = useState({
  name: '',
  mail: "",
  mensaje: "",
});

const handleChange = (e) => {
  const property = e.target.name;
  const value = e.target.value;

  setInputs({...inputs, [property]: value});

  setErrors(
    validate({
       ...inputs,
       [property]: value,
    })
 );
}

const handleSubmit = (e) => {
 e.preventDefault();
 let errors = [];

 (e.email)
}

  return <div>
    <form onSubmit={handleSubmit} >
      <label>Nombre</label>
      <input placeholder="Escribi tu nombre" 
      name="name" type="text" 
      value={inputs.name} 
      onChange={handleChange}
      className={errors.name ? styles.warning : styles.danger }/>
      <p className={styles.danger}>{errors.name}</p>
      <label>Correo electrónico:</label>
      <input placeholder="Escribi tu mail" 
      name="mail" 
      type="text" 
      value={inputs.mail} 
      onChange={handleChange}
      className={errors.name ? styles.warning : styles.danger }/>
      <p className={styles.danger}>{errors.mail}</p>
      <label>Mensaje:</label>
      <input placeholder="Escribi tu mensaje" 
      name="mensaje" 
      type="text" 
      value={inputs.mensaje} 
      onChange={handleChange}
      className={errors.name ? styles.warning : styles.danger }/>
      <p className={styles.danger}>{errors.mensaje}</p>
      <button type="submit">Enviar</button>
    </form>
  </div>
}
