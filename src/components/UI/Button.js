import classes from './Button.module.scss';

const Button = props => {
    return <button type={props.type ? props.type : 'button'} className={classes.button} disabled={props.disabled ? props.disabled : ''} title={props.title} onClick={props.onClick}>
        {props.children ? props.children : props.text}
    </button>
}

export default Button;