/*You are given a 3 * 3matrix(2d-array) that represents the final situation of a Tic Tac Toe.

Your task is to write a program that finds out the winner in case the match ended in a win. If the winner is 'x', printx.

If the winner is 'o', printo.

In case the match ended in a tie, printTie. */

function ticTacToe(matrix){
    if(matrix[0][0]=== "x" && matrix[1][1] === "x" && matrix[2][2] === "x" ){
        console.log("x");
        return
    }
    else if(matrix[0][0]=== "o" && matrix[1][1] === "o" && matrix[2][2] === "o" ){
        console.log("o");
        return
    }
    if(matrix[0][2]=== "x" && matrix[1][1] === "x" && matrix[2][0] === "x" ){
        console.log("x");
        return
    }
    else if(matrix[0][2]=== "o" && matrix[1][1] === "o" && matrix[2][0] === "o" ){
        console.log("o");
        return
    }
for(let i=0; i<3; i++){
  
   if(matrix[i][0]=== "x" && matrix[i][1] === "x" && matrix[i][2] === "x" ){
        console.log("x");
        return
    }
    else if(matrix[i][0]=== "o" && matrix[i][1] === "o" && matrix[i][2] === "o" ){
        console.log("o");
        return
    }
}
for(let i=0; i<3; i++){
  
   if(matrix[0][i]=== "x" && matrix[1][i] === "x" && matrix[2][i] === "x" ){
        console.log("x");
        return
    }
    else if(matrix[0][i]=== "o" && matrix[1][i] === "o" && matrix[2][i] === "o" ){
        console.log("o");
        return
    }
}

console.log("Tie")

}
