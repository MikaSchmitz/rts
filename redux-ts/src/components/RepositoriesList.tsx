import { useState } from "react";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions'

const RepositoriesList = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);

    const search = (event: React.FormEvent<HTMLFormElement>) => {
        // prevent the page from refreshing on submit
        event.preventDefault();

        searchRepositories(term);
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