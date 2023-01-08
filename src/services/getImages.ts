import axios from "axios";
export const getImages = async (id: number) => {
  const res = await axios.get(`https://picsum.photos/200/300`);
  return res;
};
