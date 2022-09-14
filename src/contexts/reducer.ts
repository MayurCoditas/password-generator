import { Actions } from "./actions"
import { IActions, IState } from "./interfaces"

export const reducer = (state : IState,action : IActions):IState => {

    switch(action.type)
    {
        case Actions.setLength:
            return({...state , length:action.payload})
        case Actions.setLowerCase:
            return({...state , lowerCase:action.payload})
        case Actions.setUpperCase:
            return({...state , upperCase:action.payload})
        case Actions.setNumbers:
            return({...state , numbers:action.payload})
        case Actions.setSymbols:
            return({...state, symbols:action.payload})
        case Actions.setPassword :
            return({...state, password:action.payload})
    }
}