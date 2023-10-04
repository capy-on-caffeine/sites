//  Webpage by Arnav Anand (Apeejay School, Mahavir Marg, Jalandhar)

var leftDist = 0;
var appendTxt = '';

setInterval(function () {
    leftDist -= 100;
    if (leftDist < -300) {
        leftDist = 0;
    }
    appendTxt = `${leftDist}%`;
    document.getElementById('slide-container').style.left = appendTxt;
}, 3000);

var currentCont = 'asia';
var currentPanel = 'asia-panel';

function africa(){
    document.getElementById('africa').className = document.getElementById('africa').className.replace("gall-btn", "gall-btn gall-active");
    document.getElementById(currentCont).className = document.getElementById(currentCont).className.replace("gall-btn gall-active", "gall-btn");
    
    document.getElementById(currentPanel).style.display = "none";
    document.getElementById('africa-panel').style.display = "block";
    
    currentCont = 'africa';
    currentPanel = 'africa-panel';
}

function asia(){
    document.getElementById('asia').className = document.getElementById('asia').className.replace("gall-btn", "gall-btn gall-active");
    document.getElementById(currentCont).className = document.getElementById(currentCont).className.replace("gall-btn gall-active", "gall-btn");
    
    document.getElementById(currentPanel).style.display = "none";
    document.getElementById('asia-panel').style.display = "block";
    
    currentCont = 'asia';
    currentPanel = 'asia-panel';
}

function america(){
    document.getElementById('america').className = document.getElementById('america').className.replace("gall-btn", "gall-btn gall-active");
    document.getElementById(currentCont).className = document.getElementById(currentCont).className.replace("gall-btn gall-active", "gall-btn");
    
    document.getElementById(currentPanel).style.display = "none";
    document.getElementById('america-panel').style.display = "block";
    
    currentCont = 'america';
    currentPanel = 'america-panel';
}

function australia(){
    document.getElementById('australia').className = document.getElementById('australia').className.replace("gall-btn", "gall-btn gall-active");
    document.getElementById(currentCont).className = document.getElementById(currentCont).className.replace("gall-btn gall-active", "gall-btn");
    
    document.getElementById(currentPanel).style.display = "none";
    document.getElementById('australia-panel').style.display = "block";
    
    currentCont = 'australia';
    currentPanel = 'australia-panel';
}

function europe(){
    document.getElementById('europe').className = document.getElementById('europe').className.replace("gall-btn", "gall-btn gall-active");
    document.getElementById(currentCont).className = document.getElementById(currentCont).className.replace("gall-btn gall-active", "gall-btn");
    
    document.getElementById(currentPanel).style.display = "none";
    document.getElementById('europe-panel').style.display = "block";
    
    currentCont = 'europe';
    currentPanel = 'europe-panel';
}