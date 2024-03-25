import axios from "axios";

export async function getRandom() {
  try {
    var res = await axios.get(`${import.meta.env.VITE_URL}/random`);
    return res;
  } catch (err) {
    // console.log(err);
    return err;
  }
}
