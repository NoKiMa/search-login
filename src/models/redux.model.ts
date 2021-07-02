import Login from './login.model'

interface ReduxState{
    state: Login[];
    status: boolean;
    error:string;
}

export default ReduxState;