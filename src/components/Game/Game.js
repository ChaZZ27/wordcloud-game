import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import GameContext from '../context/game-context.js';
import Button from '../UI/Button.js';

import classes from './Game.module.scss';
import Word from './Word.js';

const Game = props => {
    const context = useContext(GameContext);
    const navigate = useNavigate();

    const [userFinishedGame, setUserFinishedGame] = useState(false);
    const [userWords, setUserWords] = useState([]);

    const words = context.game.all_words.map((word, index) => <Word key={word} isGameFinished={userFinishedGame} name={word} />)

    const countUserPoints = (correct, inCorrect, unselected) => {
        return correct.length*2 - (inCorrect.length + unselected.length);
        
    }

    const onClickHandler = (e) => {
        const newSelectedWords = [];
        const selectedWords = document.querySelectorAll('li[data-selected="true"]');

        for(let i = 0; i < selectedWords.length; i++) {
            newSelectedWords.push({selected: selectedWords[i].dataset.value})
        }
        setUserWords(newSelectedWords);
        setUserFinishedGame(true);
    }

    // count user points
    useEffect(() => {
        const selectedCorrectWords = document.querySelectorAll('[data-selected="true"][data-iscorrect="true"]'),
            selectedIncorrect = document.querySelectorAll('[data-selected="true"][data-iscorrect="false"]'),
            unselectedCorrectWords = document.querySelectorAll('[data-selected="false"][data-iscorrect="true"]');
            props.userScore(countUserPoints(selectedCorrectWords, selectedIncorrect, unselectedCorrectWords));
    }, [userFinishedGame])
    
    return <div className={classes.game}>
        <h2>{context.game.question}</h2>
        <div className={classes['words-box']}>
            <ul className={classes['words-list']}>
                {words}
            </ul>
        </div>
        {userFinishedGame 
            ? <Button title="Finish the game and count point" text="Finish the game" onClick={() => navigate('/score')} /> 
            : <Button title="Check answers" text="Check answers" onClick={onClickHandler} /> }
    </div>
}

export default Game;