import { useState } from "react";

const RepositoriesList = () => {
    const [term, setTerm] = useState('');

    const search = (event: React.FormEvent<HTMLFormElement>) => {
        // prevent the page from refreshing on submit
        event.preventDefault();


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