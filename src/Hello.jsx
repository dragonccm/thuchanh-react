const Hello = () => {
    const person = {
        name: 'Peter',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };

    return (
        <>
            <div style={person.theme}>
                <h1>Xin chào: {person.name}</h1>
            </div >
            <div> Chúc bạn thành công với React</div>
        </>
    );
}

const HelloPersion = ({ name }) => {
    return (
        <>
            <h1>xin chào bạn: {name}</h1>
        </>
    );
}

export {
    HelloPersion,
    Hello
}