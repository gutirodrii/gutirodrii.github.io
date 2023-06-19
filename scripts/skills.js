const skillsButton = document.getElementsByClassName("btn-common");

function resetButtonState(){
    const trueState = db.skills.find((skill) => skill.state === true)
    if(trueState){
      trueState.state = false;
    }
  }