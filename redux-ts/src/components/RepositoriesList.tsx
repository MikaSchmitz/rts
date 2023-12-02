import { useState } from "react";
import { useDispatch } from 'react-redux';
import {actionCreators } from '../state'

const RepositoriesList = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();

    const search = (event: React.FormEvent<HTMLFormElement>) => {
        // prevent the page from refreshing on submit
        event.preventDefault();

        dispatch(actionCreators.searchRepositories(term) as any);
    }

    return (
        <div>
            <form onSubmit={search}>
                <input value={term} onChange={(event) => setTerm(event.target.value)} />
                <button>Search</button>
            </form>
        </div>
    );
}

export default RepositoriesList;