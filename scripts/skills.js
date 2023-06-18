const skillsButton = document.getElementsByClassName("btn-common");

function resetButtonState(){
    const trueState = db.skills.find((skill) => skill.state === true)
    if(trueState){
      trueState.state = false;
      console.log('Estado cambiado a false')
    }else{
      console.log('No hay truestate')
    }
  }