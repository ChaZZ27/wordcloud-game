import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import GameContext from '../context/game-context';
import Button from '../UI/Button';

import classes from './ScoreBoards.module.scss';

const ScoreBoard = () => {
    const context = useContext(GameContext);
    const navigate = useNavigate();
    
    return <div className={classes['score-board']}>
        <h2>
            {context.userScore < 1 ? 
            `Sorry ${context.userName ? context.userName : 'traveler'}!`
            :
            `Congratulations, ${context.userName ? context.userName : 'traveler'}!` }
            <br />
            Your score: <b style={context.userScore < 1 ? {color: 'red'} : {color: 'green'}}>{context.userScore < 1 ? 0 : context.userScore} points</b>
        </h2>
        
        <Button title="Try again button" text="Try again" onClick={() => navigate('/')}  />
    </div>
}

export default ScoreBoard;