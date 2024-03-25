import axios from "axios";

export async function getCategoryViewer(data) {
  // console.log(data);
  try {
    var res = await axios.get(
      `${import.meta.env.VITE_URL}/categoryviewer?q=${data}`
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
