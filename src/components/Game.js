import React from 'react';
import {Component} from "react";
import Board from "./Board";

class Game extends Component{
    render(){
       return(
           <div className = "game">
            <div className = "game-board">
            <Board/>
            </div>
            <div className = "game-info">
             <div>{}</div>
            </div>
            </div>
    )
    }
}
export default Game