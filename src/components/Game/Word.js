import { useState } from 'react';
import { useContext } from 'react';

import GameContext from '../context/game-context';
import Button from '../UI/Button';
import classes from './Word.module.scss';

const Word = props => {
    const context = useContext(GameContext);
    const [wordIsSelected, selectWord] = useState(false);


    const [wordsStyles, setWordStyles] = useState({
        marginLeft: Math.ceil(Math.random() * 3)+'rem',
        marginTop: Math.ceil(Math.random() * 3)+'rem',
        marginRight: Math.ceil(Math.random() * 6)+'rem'
    })
    
    // select words
    const buttonClickHandler = () => {
        wordIsSelected ? selectWord(false) : selectWord(true);
    }

    // check if word exists in API.. 'good_words'
    const isWordCorrect = context.game.good_words.indexOf(props.name) > -1;
    
    return <li data-selected={wordIsSelected} 
                data-iscorrect={props.isGameFinished ? isWordCorrect : ''} 
                data-value={props.name} 
                key={props.name} 
                className={classes.word} 
                style={wordsStyles}>
                    { props.isGameFinished && wordIsSelected && isWordCorrect ? <b className={classes.tooltip}>Good</b> : ''}
                    { props.isGameFinished && wordIsSelected && !isWordCorrect ? <b className={classes.tooltip}>Bad</b> : ''}
                    
            <Button title={props.name} text={props.name} onClick={buttonClickHandler} disabled={props.isGameFinished} />
        </li>
}

export default Word;