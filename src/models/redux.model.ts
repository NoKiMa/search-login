import Login from './login.model'

interface ReduxState{
    state: Login[];
    status: boolean;
    error: string|undefined;
    // total_count: number;
}

export default ReduxState;