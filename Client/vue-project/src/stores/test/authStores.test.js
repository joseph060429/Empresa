import { setActivePinia, createPinia } from "pinia";
import { authStores } from "@/stores";
import { describe, it, expect, beforeEach, vi, test } from "vitest";
import axios from "axios";

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

describe("User service", () => {
  describe("fetchUsers ", () => {
    test("realiza una solicitud GET para obtener usuarios", async () => {
      const userMock = [{ id: 1 }, { id: 2 }];

      axios.get.mockResolvedValue({
        data: userMock,
      });
    });
  });
});





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
