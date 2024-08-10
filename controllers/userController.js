
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

const register = (request, response) => {
  const {  uid, email, userName, password  } = request.body;

  if (!uid || !email || !userName || !password) {
    return response.status(400).json({
      error: "Todos los campos son obligatorios, por favor completelos",
    });
  }
  const emailExist = users.some((user) => user.email === email);
  const uidExist = users.some((user) => user.uid === uid);

  if (emailExist || uidExist) {
    return response.status(409).json({
      error: "Ya existe un usuario con el uid o email ingresados",
    });
  }
  const newUser = {
       uid,
       email,
       userName,
       password,
     
  };
  users.push(newUser);

  const userList = users.map(({ password, ...user }) => user);

  return response.status(201).json({
    message: "Usuario registrado correctamente.",
    users: userList,
  });
};



module.exports = {
  login,
  register,
};
