import { supabase } from "../database/connection";

export const addCliente = async (
  nombre,
  apeMaterno,
  apePaterno,
  rfc,
  email,
  telefono
) => {
  try {
    const { error } = await supabase.rpc("add_cliente", {
      nom_cliente: nombre,
      apellido_paterno: apePaterno,
      apellido_materno: apeMaterno,
      rfc_cliente: rfc,
      email_cliente: email,
      telefono_cliente: telefono,
    });
    if (error) throw error;
  } catch (error) {
    console.error(error);
  }
};
export const showAndSearchCliente = async (id, nombre) => {
  try {
    const { data, error } = await supabase.rpc("show_all_cliente", {
      id_cliente: id,
      nombre_cliente: nombre,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getCliente = async (rfcCustomer) => {
  try {
    const { data, error } = await supabase.rpc("get_cliente", {
      rfc_cliente: rfcCustomer,
    }).single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const editCliente = async (rfcEdit, nombre, apeMaterno, apePaterno, rfc, email, telefono) => {
  try {
    const { error } = await supabase.rpc("edit_cliente", { rfc_edit: rfcEdit, nom_cliente: nombre, ape_materno: apeMaterno, ape_paterno: apePaterno, rfc_cliente: rfc, email_cliente: email, tel_cliente: telefono });
    if (error) throw error
  } catch (error) {
    console.error(error)
  }
}
export const deleteCliente = async (rfcCustomer) => {
  try {
    const { error } = await supabase.rpc("delete_cliente", { rfc_delete: rfcCustomer });
    if(error) throw error 
  } catch (error) {
    console.error(error);
  }
}
