import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PLAYER_ONE: 'X',
      PLAYER_TWO: 'O',
      currentTurn: 'X',
      board: ['', '', '', '', '', '', '', '', ''],    
    };
  }

  componentDidMount() {
    console.log('component did mount');
    //attach event listener to the board
    var board = document.querySelector('.board');
    board.addEventListener('click', (e) => {
      e.target.innerHTML = this.state.currentTurn;
      var board = this.state.board;
      board[e.target.id] = this.state.currentTurn;
      this.setState({board: board});
      // console.log(this.state.board);
      var currentTurn = this.state.currentTurn === this.state.PLAYER_ONE ? this.state.PLAYER_TWO : this.state.PLAYER_ONE;
      this.setState({currentTurn: currentTurn});

      if (this.checkWinner()) {
        alert ('somebody won');
      }
    });
  }

  checkWinner() {
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    return winningCombos.find((combo) => {
      if (this.state.board[combo[0]] === this.state.board[combo[1]] && this.state.board[combo[1]] === this.state.board[combo[2]]) {
        return this.state.board[combo[0]];
      } else {
        return false;
      }
    })
  }

  render() {
    return (
      <div className="board">
        <div className="square" id="0">{this.state.board[0]}</div>
        <div className="square" id="1">{this.state.board[1]}</div>
        <div className="square" id="2">{this.state.board[2]}</div>
        <div className="square" id="3">{this.state.board[3]}</div>
        <div className="square" id="4">{this.state.board[4]}</div>
        <div className="square" id="5">{this.state.board[5]}</div>
        <div className="square" id="6">{this.state.board[6]}</div>
        <div className="square" id="7">{this.state.board[7]}</div>
        <div className="square" id="8">{this.state.board[8]}</div>
      </div>
    );
  }




}

export default App;
