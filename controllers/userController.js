
const users = [
  {
    uid: "123",
    email: "ana@gmail.com",
    userName: "Ana",
    password: "12345678",
  },
  {
    uid: "456",
    email: "sebas@gmail.com",
    userName: "Sebas",
    password: "87654321",
  },
];

const login = (request, response) => {
  const { query } = request;

  const result = users.filter((user) => user.uid === query.uid);

  if (result.length === 0) {
    return response.status(404).json({
      error: "Usuario no encontrado.",
    });
  }

  const user = result[0];
  if (user.password !== query.password) {
    return response.status(401).json({
      error: "Contraseña invalida.",
    });
  }
  return response.status(200).json({
    message: "Inicio sesion correcto",
    user,
  });
};


module.exports = {
  login,
};
