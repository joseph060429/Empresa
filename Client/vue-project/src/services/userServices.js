import { authStores } from "@/stores";

export const useAuthStore = () => {
  const store = authStores();

  const crearUsuario = async (data) => {
    return await store.create(data).then((result) => {
      return result;
    });
  };

  const actualizaUsuario = async (data) => {
    return await store.edit(data).then((result) => {
      return result;
    });
  };
  const borrarUsuario = async (data) => {
    return await store.delete(data).then((result) => {
      return result;
    });
  };
  const obtenerUsuario = async (numUsuario) => {
    return await store.get(numUsuario).then((result) => {
      return result;
    });
  };
  const obtenerTodosUsuario = async () => {
    return await store.getAll().then((result) => {
      return result;
    });
  };

  const loginUsuario = async (data) => {
    return await store.login(data).then((result) => {
      return result;
    });
  };

  const registrarUsuario = async (data) => {
    return await store.login(data).then((result) => {
      return result;
    });
  };

  return {
    crearUsuario,
    actualizaUsuario,
    borrarUsuario,
    obtenerUsuario,
    obtenerTodosUsuario,
    loginUsuario,
    registrarUsuario,
  };
};

export default useAuthStore;

