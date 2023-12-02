import { useState } from "react";

const users = [
    { name: 'Sarah', age: 20},
    { name: 'Alex', age: 20},
    { name: 'Michael', age: 21},
    { name: 'Mika', age: 22}
];

const UserSearch = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

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
            <input value={name} onChange={(e) => setName(e.target.value)} />
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