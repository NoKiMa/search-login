import Login from '../models/login.model'
import axios from 'axios'

const loginApiSevice = {
   getLoginsData: async () => {
    try { 
        const response = await axios.get("https://api.github.com/search/users?q=foo")
        const logins:Login[] = response.data.items.map((item:Login) =>{ return {
          avatar_url:item.avatar_url,
          login:item.login,
          type:item.type
        }
        });
        console.log("logins", logins);
        return logins;
    } catch (e){
        throw new Error(e)
      }
    },
}

export default loginApiSevice;