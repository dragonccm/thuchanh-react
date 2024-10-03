const Hello1 = ({name}) => {
    const hiYou = (name) => {
        alert("Hello " + name)
    }
    const hiAll = () => {
        alert("hello everyone")
    }
    return (
        <>
            <span>
                <button onClick={hiAll}>Hi All</button>
                <button onClick={()=>hiYou(name)}>Hi you</button>
            </span>

        </>
    );
}


export default Hello1;