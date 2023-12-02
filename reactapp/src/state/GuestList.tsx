import { useState } from 'react';

const GuestList = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const addGuest = () => {
        if (name === '') {
            return;
        }
        setName('');
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={addGuest}>Add Guest</button>
        </div>
    );
}

export default GuestList;