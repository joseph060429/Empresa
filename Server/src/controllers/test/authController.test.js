const auth = require("../authController.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Users} = require("../../models/user.js");
import { describe, expect, jest, test } from "@jest/globals";
// import { jest } from "@jest/globals";

jest.mock("bcrypt");

const { loginUsuario } = require("../authController");

// test("Probar login", () => {
//     const req = {
//         body: {
//             email: "josephsm0406",
//             password: "123456"
//         }
//     }
// });

test('Iniciar sesión el usuario y devolver un token', async () => {
    const req = {
      body: {
        email: 'john@example.com',
        password: 'password123',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const mockUser = {
      email: 'john@example.com',
      password: 'hashedPassword',
      dataValues: {
        email: 'john@example.com',
        // other user properties
      },
    };

    // const mockToken = 'mockToken';

    // // Mockear el comportamiento de las dependencias
    // Users.findOne.mockResolvedValue(mockUser);
    // bcrypt.compare.mockResolvedValue(true);
    // jwt.sign.mockReturnValue(mockToken);

    // // Llamar a la función loginUsuario
    // await loginUsuario(req, res);

    // // Verificar que las funciones y métodos necesarios se hayan llamado con los argumentos correctos
    // expect(Users.findOne).toHaveBeenCalledWith({ where: { email: 'john@example.com' } });
    // expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedPassword');
    // expect(jwt.sign).toHaveBeenCalledWith(
    //   { email: 'john@example.com', dataValues: { email: 'john@example.com' } },
    //   process.env.SECRET,
    //   { expiresIn: '1H' }
    // );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: mockToken });
    expect(res.send).not.toHaveBeenCalled();
  });