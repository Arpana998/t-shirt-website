import './Card.css';
const Card = (props) => {
    return(
        <div className={`cardcontainer ${props.className}`}>
            {props.children}
        </div>
    )
}
export default Card;