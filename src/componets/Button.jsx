import './Button.scss';
function Button(props) {
    return ( 
        <input type="button" value={props.value} id={props.id} onClick={props.callback} className={props.className} data-delete={props.data} />
     );
}

export default Button;