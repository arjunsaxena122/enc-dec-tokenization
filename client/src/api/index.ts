import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.SERVER_ORIGIN}/api/v1`,
  headers: {
    "Content-Type": "Application/json",
    Accept: "Application/json",
  },
});

const encodeTokenFromUserInput = async (data: object) =>
  await api.post("/encode-token", data);
const decodeTokenFromEncodedToken = async (data: object) =>
  await api.post("/decode-token", data);

export { encodeTokenFromUserInput, decodeTokenFromEncodedToken };
