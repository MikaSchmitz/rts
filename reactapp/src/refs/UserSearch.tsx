import { useState, useRef, useEffect } from "react";

const users = [
    { name: 'Sarah', age: 20},
    { name: 'Alex', age: 20},
    { name: 'Michael', age: 21},
    { name: 'Mika', age: 22}
];

const UserSearch = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        // focus on the given input when loading the page for the first time
        inputRef.current.focus();

        // [] to prevenet the function from being called multiple times
    }, []);

    const findUser = () => {
        // find works as a foreach, the code provided is applied to each entry inside the array
        const foundUser = users.find((user) => {
            return user.name === name;
        })

        setUser(foundUser);
    }

    return (
        <div>
            <h3>User Search</h3>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={findUser}>Find User</button>
            <div>
                {user && (
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    </table>
                    
                )}
            </div>
        </div>
    );
}

export default UserSearch;