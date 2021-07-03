import Login from '../models/login.model'
import axios from 'axios'
import { BASE_URL } from '../config/main.const'

const loginApiSevice = {
   getLoginsData: async (login:string, current_page:number, post_on_page:string) => {
    try { 
        const response = await axios.get(`${BASE_URL}${login}&page=${current_page.toString()}&per_page=${post_on_page}`)
        const logins:Login[] = response.data.items.map((item:Login) =>{ return {
          avatar_url:item.avatar_url,
          login:item.login,
          type:item.type
        }
        });
        const total_count = response.data.total_count
        
        return {logins,total_count};
    } catch (e){
        throw new Error(e)
      }
    },
}

export default loginApiSevice;