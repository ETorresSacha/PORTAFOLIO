
export const validateData = (input) => {
  const hasEmptyValues = Object.values(input).some((value) => value === "");

  let error =""
  if (hasEmptyValues) error = "Datos requeridos incompletos"
  else if (!/^[a-zA-Z]+(?: [a-zA-Z]+)?$/.test(input.nombre)) error = "El nombre solo debe contener letras";
  else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.email)) error = "Email inválido";

  return error
};
