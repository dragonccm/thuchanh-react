import { useState } from "react";
import { useEffect } from "react";
const Car = () => {
    const [car, setCar] = useState({
        name: "lambo",
        color: 'red',
        year: '1990'
    });
    const [newYear, setNewYear] = useState(car.year);
    const [data, setData] = useState([]);   
    const updateY = () => {
        setCar({ ...car, year: newYear });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/getsp');
                const data = await response.json();
                setData(data.DT);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div>Show information of Car: {JSON.stringify(car)}</div>
            <div>
                <ul>
                    {data.map((item) => (
                       <li className="list-group-item" key={item.masp}>
                       <h5>{item.ten}</h5>
                       <p>Price: {item.gia}</p>
                       <img src={item.hinhanh} alt={item.ten} className="img-fluid" />
                       <p>Description: {item.mota}</p>
                       <p>Group ID: {item.idnhom}</p>
                   </li>
                    ))}
                
                </ul>
            </div>
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

