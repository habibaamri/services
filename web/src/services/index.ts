import axios from "axios";
import { useQuery } from "react-query";

const fetchServices = async () => {
  try {
    const Response = await axios.get("http://localhost:3000/services"); //to use=>env api url
    return Response;
  } catch (e) {
    console.log("====ee", e);
  }
};

const useServices = () => {
  let result = { isLoading: false, data: [] };
  const response = useQuery("services", fetchServices);
  return { ...response };
};

export default useServices;

export const openUrl = (url: string) => {
  let secureUrl;
  try {
    secureUrl = new URL(url);
    if (secureUrl.protocol === "http:" || secureUrl.protocol === "https:") {
      window.open(url, "_blank");
    }
  } catch (_) {
    return false;
  }
};
