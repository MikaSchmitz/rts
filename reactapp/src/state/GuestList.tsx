import { useState } from 'react';

const GuestList = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <h3>Guest List</h3>

            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button>Add Guest</button>
        </div>
    );
}

export default GuestList;