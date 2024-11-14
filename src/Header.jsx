import { NavLink } from 'react-router-dom';

const Item = ({ link, content }) => {
    return (
        <>
            <li style={{
                padding: "1rem",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem",
                borderRadius: "10px",
            }}>
                <NavLink to={link} style={{
                    textDecoration: "none",
                    color: "white"
                }}>{content}</NavLink>
            </li>
        </>
    );
}

const listNanme = [
    {
        url: "/login",
        text: "login"
    },
    {
        url: "/hello",
        text: "hello"
    },
    {
        url: "/car",
        text: "car"
    }
]

const Menu = () => {
    return (
        <>
            <ul style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                listStyle: "none",
                gap: "1rem",
            }}>
                {listNanme.map((data) => (
                    <Item key={data.url} link={data.url} content={data.text} />
                ))}
            </ul>
        </>
    );
}

export {
    Menu,
    Item
}
