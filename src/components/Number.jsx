export const Number = ({number}) => { // případně přes props.number, nebudou složené závorky (destructuring)
    return (
        <h2>{number}</h2>
    );
};

export default Number;