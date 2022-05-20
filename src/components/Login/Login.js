import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button';
import classes from './Login.module.scss';

const Login = props => {
    const inputRef = useRef();
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.setUserName(inputRef.current.value.trim());
        navigate('/game');
    }

    return <div className={classes.login}>
            <h1>Wordcloud game</h1>
            
            <form onSubmit={onSubmitHandler} className={classes.form}>
                <input ref={inputRef} className={classes.input} title="User nickname" type="text" placeholder="Please enter your nickname here..." required id="username"  />    
                <Button title="Play the game" text="Play" type="submit" />
            </form>
        </div>
}

export default Login;