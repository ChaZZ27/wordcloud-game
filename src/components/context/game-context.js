import { createContext } from "react"

const GameContext = createContext({
    userName: '',
    userScore: 0,
    game: null
})

export default GameContext;
