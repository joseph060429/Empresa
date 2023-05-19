const { loginUsuario, createNewUser } = require("../authController");
const { mockResponse } = require("jest-mock-req-res");

// Test registro bueno

test("Registrarse", async () => {
  const req = {
    body: {
      email: "josephsm0406@gmail.com",
      password: "123456",
      surnames: "Sepulveda",
      name: "Joseph",
    },
  };

  const res = mockResponse();

  await createNewUser(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({ token: expect.any(String) });
  expect(res.send).not.toHaveBeenCalled();
});

// Test login bueno
// test("Iniciar sesión el usuario y devolver un token", async () => {
//   const req = {
//     body: {
//       email: "josephsm0406@gmail.com",
//       password: "123456",
//     },
//   };

//   const res = mockResponse();

//   await loginUsuario(req, res);

//   expect(res.status).toHaveBeenCalledWith(200);
//   expect(res.json).toHaveBeenCalledWith({ token: expect.any(String) });
//   expect(res.send).not.toHaveBeenCalled();
// });

//Para probar que el test falla tenemos que poner un email o contraseña que no existan o coincidan

// test("Iniciar sesión falla", async () => {
//   const req = {
//     body: {
//       email: "josephsm0406@gmail.commm",
//       password: "123456789",
//     },
//   };

//   const res = mockResponse();

//   await loginUsuario(req, res);

//   expect(res.status).toHaveBeenCalledWith(200);
//   expect(res.json).toHaveBeenCalledWith({ token: expect.any(String) });
//   expect(res.send).not.toHaveBeenCalled();
// });
