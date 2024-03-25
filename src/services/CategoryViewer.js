import axios from "axios";

export async function getCategoryViewer(data) {
  // console.log(data);
  try {
    // console.log(`${import.meta.env.VITE_URL}/category?c=${data}`);
    var res = await axios.get(`${import.meta.env.VITE_URL}/category?c=${data}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
