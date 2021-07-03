import Login from './login.model'

interface ReduxState{
    state: Login[];
    status: boolean;
    error: string|undefined;
    total_count: number;
    current_page: number;
    post_on_page: string;
    searchValue: string;
}

export default ReduxState;