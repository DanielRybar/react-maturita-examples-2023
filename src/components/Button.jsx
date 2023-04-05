export const Button = ({isUp, number, setNumber}) => {

    const buttonHandler = () => {
        if (isUp) {
            // setNumber(number + 1);
            setNumber(prevNumber => prevNumber + 1); // Toto je preferovaný způsob, jak aktualizovat stav, když závisí na předchozím stavu
        } else {
            // setNumber(number - 1);
            setNumber(prevNumber => prevNumber - 1);
        }
    };

    return (
        <button disabled={!isUp && number === 0 ? true : false} onClick={buttonHandler}>
            {isUp ? "+" : "-"}
        </button>
    );
};

export default Button;