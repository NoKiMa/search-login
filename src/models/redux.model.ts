import User from './login.model'

interface ReduxState{
    users: User[];
    status: boolean;
    error: string|undefined;
    total_count: number;
    current_page: string;
    post_on_page: string;
    searchValue: string;
}

export default ReduxState;