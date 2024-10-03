import { useState } from "react";

const Car = () => {
    const [car, setCar] = useState({
        name: "lambo",
        color: 'red',
        year: '1990'
    });
    const [newYear, setNewYear] = useState(car.year);

    const updateY = () => {
        setCar({ ...car, year: newYear });
    };

    return (
        <>
            <div>Show information of Car: {JSON.stringify(car)}</div>
            <div>
                Update Year of Car: 
                <input 
                    type="number" 
                    value={newYear} 
                    onChange={(e) => setNewYear(e.target.value)} 
                />
                <input 
                    type="button" 
                    value="Update Year" 
                    onClick={updateY} 
                />
            </div>
        </>
    );
};

export default Car;