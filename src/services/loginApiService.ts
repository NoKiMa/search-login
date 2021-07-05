import User from "../models/login.model";
import axios from "axios";
import { BASE_URL } from "../config/main.const";

const loginApiSevice = {
  getLoginsData: async (
    login: string,
    current_page: string,
    per_page: string
  ) => {
    try {
      const response = await axios.get(
        `${BASE_URL}${login}&page=${current_page}&per_page=${per_page}`
      );
      const users: User[] = response.data.items.map((item: User) => {
        return {
          avatar_url: item.avatar_url,
          login: item.login,
          type: item.type,
        };
      });
      const total_count = response.data.total_count;

      return { users, total_count };
    } catch (e) {
      throw new Error(e);
    }
  },
};

export default loginApiSevice;
