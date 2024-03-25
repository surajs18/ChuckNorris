import axios from "axios";

export async function getCategories() {
  try {
    var res = await axios.get(`${import.meta.env.VITE_URL}/categories/all`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
