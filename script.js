//VARIÁVEIS DA BOLA;
let ball = window.document.querySelector('.ball')
//VARIÁVEIS DA CPU;
let cpuMoveBar = 30
let cpuBar = window.document.querySelector('.barCpu')
//VARIÁVEIS E FUNÇÕES DO EIXO X E Y;
let ballMoveX = 0.1
let speed = 7
let ballPositionX = 45
let ballMoveY = -0.1
let ballPositionY = 42.5
//PONTUAÇÃO;
let cpuScoreMsg = window.document.querySelector('.cpuScore')
let playerScoreMsg = window.document.querySelector('.playerScore')
let cpuScore = 0
let playerScore = 0

function moveBallX(){
    ballPositionX += ballMoveX * speed
    if(ballPositionX <= 0){
        ballMoveX = 0.3 
    }else if(ballPositionX >= 95){
        ballMoveX = -0.3
    }
    ball.style.right=`${ballPositionX}%`
    cpuMove()
    requestAnimationFrame(moveBallX)
}

function moveBallY(){
    ball.style.top=`${ballPositionY}%`
    ballPositionY += ballMoveY * speed
    if((ballPositionY <= 4) && ((ballPositionX >= cpuMoveBar - 5) && (ballPositionX <= cpuMoveBar + 32))){
        ballMoveY = 0.2
    }else if((ballPositionY >= 92) && ((ballPositionX >= playerBarPosX - 5) && (ballPositionX <= playerBarPosX + 32))){
        ballMoveY = -0.2
    }else if(ballPositionY >= 95){
        cpuScore += 1
        cpuScoreMsg.textContent=`${cpuScore}`
        ball.style.top = '42.5%'
        ballPositionY = 42.5
        ball.style.right = '45%'
        ballPositionX = 45
    }else if(ballPositionY <= 0){
        playerScore += 1
        playerScoreMsg.textContent=`${playerScore}`
        ball.style.top = '42.5%'
        ballPositionY = 42.5
        ball.style.right = '45%'
        ballPositionX = 45
    }
    requestAnimationFrame(moveBallY)
    
}

//FUNÇÃO DE MOVIMENTAÇÃO DO PLAYER;

let playerBar = window.document.querySelector('.barPlayer')
let btnLeft = window.document.querySelector('.esq')
let btnRight = window.document.querySelector('.dir')
let playerBarPosX = 33
let playerPosX= 0
let intervalRightPlayerBar;
let intervalLeftPlayerBar;

function playerMoveLeft(){
        playerPosX += 1
        playerBarPosX += playerPosX
        if(playerBarPosX >= 70){
            playerBarPosX = 70
        }
        
        playerBar.style.right=`${playerBarPosX}%`
}

function playerMoveRight(){
    
        playerPosX += 1
        playerBarPosX -= playerPosX
        if(playerBarPosX <= 0){
            playerBarPosX = 0
        }
        
        playerBar.style.right=`${playerBarPosX}%`
    }


//FUNÇÃO DE MOVIMENTAÇÃO DA CPU;

function cpuMove(){
    
    cpuMoveBar += (ballMoveX * Math.random() * 1.2) * speed
    if(cpuMoveBar <= 0){
        cpuMoveBar = 0
    }else if(cpuMoveBar >= 65){
        cpuMoveBar = 65
    }
    cpuBar.style.right=`${cpuMoveBar}%`  
    
}

moveBallY()
moveBallX()