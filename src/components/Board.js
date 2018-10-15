import React from "react";
import Square from "./Square";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null)
        };
    }
    handleClick(i){
        const squares = this.state.squares;
        squares[i] = 'X';
        this.setState({squares:squares});
    }

    renderSquare(i){
        return <Square
            value={this.state.squares[i]}
            onPress={() => this.handleClick(i)}/>;
    }

    render(){
        return (
            <div>
            <div className = "board-row">
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            </div>
            <div></div>
            <div className = "board-row">
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            </div>
            <div className = "board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
            </div>
        </div>
    )
    }

}

export default Board