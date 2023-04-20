import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/loginStores";

export const useLogin = () => {
  const store = useLoginStores();

  const crearUsuario = async (data) => {
    return await store.create(data).then(result => {
      return result;
    });
  };
  const actualizaUsuario = async (data) => {
    return await store.edit(data).then(result => {
        return result;
    });
  };
  const borrarUsuario = async (data) => {
    return await store.delete(data).then(result => {
        return result;

    })

  };
  const obtenerUsuario = async (numUsuario) => {
    return await store.get(numUsuario).then(result => {
        return result;
    })

  };
  const obtenerTodosUsuario = async (todosUsuarios) => {
    return await store.getAll(todosUsuarios).then(result => {
        return result;
    })

  }


  return {
        crearUsuario,
        actualizaUsuario,
        borrarUsuario,
        obtenerUsuario,
        obtenerTodosUsuario
    }
};

