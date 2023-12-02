import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    };

    findUser = () => {
        // find works as a foreach, the code provided is applied to each entry inside the array
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        })

        this.setState({user: foundUser});
    }

    render() {
        const { name, user } = this.state;

        return (
            <div>
                <h3>User Search</h3>
                <input value={name} onChange={(e) => this.setState({name: e.target.value })} />
                <button onClick={this.findUser}>Find User</button>
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
}

export default UserSearch;