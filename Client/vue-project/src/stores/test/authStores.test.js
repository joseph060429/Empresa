import { setActivePinia, createPinia } from "pinia";
import { authStores } from "@/stores";
import { describe, it, expect, beforeEach, vi, test } from "vitest";
import axios from "axios";
import { useAuthStore } from "../../services/userServices";

describe("Test", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("Testeo", () => {
    const testeo = authStores();
    expect(testeo.name).toBe(null);
  });
});

vi.mock("axios");

//Login//

describe("AuthStores", () => {
  it("Muestra login correctamente", async () => {
    const email = "juanito@gmail.com";
    const password = "123456";

    axios.post.mockResolvedValue({ token: "abcdefsjuhjdh" });

    const user = await axios.post("/login", { email, password });
    console.log(user);

    expect(axios.post).toBeCalledWith("/login", { email, password });
    expect(user).toHaveProperty("token");
  });
});

//Traer todos los usuarios test
describe("TraerUsuarios", () => {
  test("Realiza una solicitud GET para obtener usuarios", async () => {
    const userMock = [{ id: 1 }, { id: 2 }];
    axios.get.mockResolvedValue({
      data: userMock,
    });

    const user = await useAuthStore().obtenerTodosUsuario();
      console.log("nombreeee", user);
    expect(axios.post).toHaveBeenCalledOnce(
      "https://localhost:4000/traerTodosUsuarios"
    );

    
  });
});

//TEST crear usuario
// describe('createUser', () => {
//   test('Hace una solicitud POST para crear un nuevo usuario', async () => {
//     const newUserPayload = {
//       name: 'Joseph Ricardo',
//       surnames: 'Sepulveda Montes',
//       email: "josephsm0406@gmail.com",
//       password: "123456"
//     }

//     const newUserMock = {
//       id: 1,
//       ...newUserPayload,

//     }

//     axios.post.mockResolvedValue({
//       data: newUserMock,
//     })

//     const nuevoUsuario = await useAuthStore().crearUsuario

//     expect(axios.post).toHaveBeenCalledOnce('https://localhost:4000/registro', newUserPayload)
//     expect(nuevoUsuario).toStrictEqual(newUserMock)

//   })
// })

// describe('createUser', () => {
//   test('makes a POST request to create a new user', async () => {
//     const newUserPayload = {
//       name: 'john doe',
//     }

//     const newUserMock = {
//       id: 1,
//       ...newUserPayload,
//     }

//     axios.post.mockResolvedValue({
//       data: newUserMock,
//     })

//     const newUser = await crearUsuario(newUserPayload)
//   })
// })

// describe('fetchUsers', () => {
//   test('makes a GET request to fetch users', async () => {
//     const usersMock = [{ id: 1 }, { id: 2 }]

//     axios.get.mockResolvedValue({
//       data: usersMock,
//     })

//     const users = await crearUsuario()q

//     expect(axios.get).toHaveBeenCalledWith('')

//   })
// })

// describe('fetchUsers', () => {
//     test('realiza una solicitud GET para obtener usuarios', async () => {
//       const usersMock = [{ id: 1 }, { id: 2 }]

//       axios.get.mockResolvedValue({
//         data: usersMock,
//       })

//       const users = await fetchUsers()

//       expect(axios.get).toHaveBeenCalledWith('https://localhost:4000/')

//     })
//   })

// Nadaaaa

// describe("userStore", () => {
//   let store;

//   beforeEach(() => {
//     store = authStores();
//   });

//   afterEach(() => {
//     store.$reset();
//   });

//   test("login method sets token in localStorage on successful login", async () => {
//     // Simular una respuesta exitosa del servidor
//     const mockToken = "dummyToken";
//     const postMock = jest
//       .fn()
//       .mockResolvedValueOnce({ data: { token: mockToken } });
//     store.$apiClient = { post: postMock };

//     // Ejecutar el método de login
//     await store.login({ email: "test@example.com", password: "password" });

//     // Verificar que el token se haya establecido en localStorage
//     expect(localStorage.getItem("token")).toBe(mockToken);
//   });

//   test("register method calls login method after successful registration", async () => {
//     // Simular una respuesta exitosa del servidor
//     const mockToken = "dummyToken";
//     const postMock = jest
//       .fn()
//       .mockResolvedValueOnce({ data: { token: mockToken } })
//       .mockResolvedValueOnce({ data: { errorCode: null } });
//     store.$apiClient = { post: postMock };

//     // Montar el componente para poder acceder a los métodos de la tienda
//     const wrapper = mount({
//       template: "<div></div>",
//       setup() {
//         store.register = jest.fn();
//       },
//     });

//     // Llamar al método de registro
//     await store.register({
//       name: "John",
//       password: "password",
//       surnames: "Doe",
//       email: "test@example.com",
//     });

//     // Verificar que se haya llamado al método de login
//     // expect(store.register).toHaveBeenCalled();
//   });
// });

// describe('User Store', () => {
//   it('sets token in localStorage on successful login', async () => {
//     // Create a mock response with the token
//     const mockToken = 'mockToken';
//     const mockApiResponse = { data: { token: mockToken } };
//     const mockPost = jest.fn().mockResolvedValue(mockApiResponse);

//     // Mock the apiClient.post method
//     authStores.$apiClient = {
//       post: mockPost,
//     };

//     // Mount the userStore
//     const wrapper = mount(authStores);

//     // Call the login method with valid credentials
//     await wrapper.vm.login({ email: 'test@example.com', password: 'password' });

//     // Expect the token to be set in localStorage
//     expect(localStorage.setItem).toHaveBeenCalledWith('token', mockToken);
//   });
