import axios, { AxiosPromise } from "axios";
import { RegisterAuthDto, RegisterEntity } from "./fetchers";

type props = {
  breakpoint: string;
  method?: "get" | "post" | "put" | "delete";
  data?: any;
  params?: any;
  config?: any;
  token?: string;
};

const mainApi = ({
  method = "get",
  breakpoint,
  data,
  params,
  token,
}: props) => {
  return axios({
    method,
    url: `http://api.localhost${breakpoint}`,
    data,
    ...(params && { params }),
    ...(token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });
};

const api = {
  auth: {
    registration: (data: RegisterAuthDto): AxiosPromise<RegisterEntity> =>
      mainApi({
        breakpoint: "/auth/registration",
        method: "post",
        data,
      }),
  },
  articles: {
    get: () => mainApi({ breakpoint: "/articles" }).then((res) => res.data),
  },
  users: {
    getAll: () => mainApi({ breakpoint: "/users" }).then((res) => res.data),
    profile: (token: string) =>
      mainApi({ breakpoint: "/users/getProfile", token }),
  },
};

export default api;
