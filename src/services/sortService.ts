import User from "../models/login.model";

export const sortService = (
  users: User[],
  fieldName: string,
  sortByAsc: boolean
): User[] => {
  let sortState: User[] = users.map((user) => {
    return { avatar_url: user.avatar_url, login: user.login, type: user.type };
  });
  if (sortByAsc) {
    return sortState.sort((a, b) => {
      return a[fieldName]< b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0;
    });
  } else {
    return sortState.sort((a, b) => {
      return a[fieldName] > b[fieldName] ? -1 : a[fieldName] < b[fieldName] ? 1 : 0;
    });
  }
};
