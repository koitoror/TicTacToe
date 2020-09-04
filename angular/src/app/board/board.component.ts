import { Component, OnInit } from '@angular/core';
import { SquareEnum } from '../square/SquareEnum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private currentPlayer:SquareEnum;
  public board:SquareEnum[][];
  private isGameOver:boolean;
  public statusMessage;

  constructor() { }

  ngOnInit(){
  	this.newGame();
  }
  get gameOver():boolean{
  	return this.isGameOver;
  }

  newGame(){
  	this.board=[];
  	for(let  row = 0;row<3;row++){
  		this.board[row]=[];
  		for(let col = 0; col<3;col++){
  			this.board[row][col]= SquareEnum.EMPTY;
  		}
  	}
  	this.currentPlayer = SquareEnum.x;
  	this.isGameOver = false;
  	this.statusMessage= `Player ${this.currentPlayer}'s turn`;
  }

  move(row:number, col:number):void{
  	if(!this.isGameOver && this.board[row][col]===SquareEnum.EMPTY){
  		this.board[row][col]=this.currentPlayer;
  		if(this.isDraw()){
  			this.statusMessage = "It's a Draw!";
  			this.isGameOver = true;
  		}else if(this.isWin()){
  			this.statusMessage = `Player ${this.currentPlayer} wins`;
  			this.isGameOver =true;
  		}else{
  			this.currentPlayer = this.currentPlayer===SquareEnum.x? SquareEnum.o:SquareEnum.x;
  		}
  	}
  }
  isDraw():boolean{
  	for(const columns of this.board){
  		for(const col of columns){
  			if(col===SquareEnum.EMPTY){
  				return false;
  			}
  		}
  	}
  	return !this.isWin();
  }

  isWin():boolean{
  	for(const columns of this.board){
  		if(columns[0]===columns[1] && columns[1]===columns[2] && columns[0]!==SquareEnum.EMPTY){
  			return true;
  		}
  	}

  	for(let col = 0;col<this.board[0].length;col++){
  		if(
  			this.board[0][col]===this.board[1][col]&&
  			this.board[0][col]===this.board[2][col]&&
  			this.board[0][col]!== SquareEnum.EMPTY
  		){
  			return true;
  		}
  	}
  	if(
  		this.board[0][0]===this.board[1][1]&&
  		this.board[0][0]===this.board[2][2]&&
  		this.board[0][0]!== SquareEnum.EMPTY
  	){
  		return true;
  	}
  	if(
  		this.board[0][2]===this.board[1][1]&&
  		this.board[0][2]===this.board[2][2]&&
  		this.board[0][2]!== SquareEnum.EMPTY
  	){
  		return true;
  	}


  }

}
