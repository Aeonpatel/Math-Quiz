player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
answer_turn="player2";
question_turn="player1";
player1_score=0
player2_score=0
document.getElementById("player_question").innerHTML="Question turn :" + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn :" + player2_name;
document.getElementById("player_1").innerHTML= player1_name + ":";
document.getElementById("player_2").innerHTML= player2_name + ":";
function Send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;

Actual_answer= parseInt(number1) * parseInt(number2);

Question_number="<h4>" + number1 + "x" + number2 + "</h4>";
input_box="<br> Answer : <input type='text' id='answer'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row= Question_number + input_box + check_button ;

document.getElementById("output").innerHTML=row

document.getElementById("number1").innerHTML=""
document.getElementById("number2").innerHTML=""
}

function check(){
get_answer=document.getElementById("answer").value;


if(get_answer==Actual_answer){
if(answer_turn=="player1"){
update1_score=Number(player1_score)+1;
document.getElementById("player1_score").innerHTML=update1_score;
  
}
else
{
update2_score=Number(player2_score)+1;
document.getElementById("player2score").innerHTML=update2_score;
}
}
if(question_turn == "player_1"){
    question_turn = "player_2";
    document.getElementById("player_question").innerHTML="Question Turn -" + player2_name;
    document.getElementById("player_answer").innerHTML="Answern Turn -" + player1_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML="Question Turn -" + player1_name;
        document.getElementById("player_answer").innerHTML="Answer Turn -" + player2_name;
        }
    
    
        
}
