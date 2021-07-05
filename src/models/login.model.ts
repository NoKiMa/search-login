interface User extends IObjectKeys {
  avatar_url: string;
  login: string;
  type: string;
}

interface IObjectKeys {
  [key: string]: string | number;
}

export default User;
