import Login from './login.model'

interface ReduxState{
    state: Login[];
    status: boolean;
    error: string|undefined;
    total_count: number;
    current_page: string;
    post_on_page: string;
    searchValue: string;
}

export default ReduxState;