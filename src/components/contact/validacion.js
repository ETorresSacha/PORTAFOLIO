
const NOMBRE = "nombre";
const EMAIL = "email";
const MENSAJE = "mensaje";

export const validateData = (name, value) => {
  const error = {};

  switch (name) {
    case NOMBRE:
      if (!value) {
        error.nombre = "Nombre requerido";
      } else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(value)) {
        error.nombre = "Solo puede contener letras";
      } else if (value.length > 30) {
        error.nombre = "Debe tener menos de 30 caractéres";
      }
      break;

    case EMAIL:
        if (!value) {
            error.email = "Indique su email";
          } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ) {
            error.email = "Email inválido";
          } else if (value.length > 30) {
            error.email = "Debe tener menos de 30 caractéres";
          }
          break;

    case MENSAJE:
      if (!value) {
        error.mensaje = "Se requiere un mensaje";
      } 
      break;

    default:
      break;
  }

  return error;
};
