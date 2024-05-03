
  var one=document.getElementById("one")
  var two=document.getElementById("two")
  var three=document.getElementById("three")
  var four=document.getElementById("four")
  var five=document.getElementById("five")
  var onestate = one.animationPlayState
  var twostate = two.animationPlayState
  var threestate = three.animationPlayState
  var fourstate = four.animationPlayState
  var fivestate = five.animationPlayState
  function green(){

  if(onestate=="running"){
    one.style.backgroundColor="Yellow"
  } else if(twostate=="running"){
    two.style.backgroundColor= "green"
  } else if(threestate=="running"){
    three.style.backgroundColor= "green"
  } else if(fourstate=="running"){
    four.style.backgroundColor= "green"
  } else if(fivestate=="running"){
    five.style.backgroundColor= "green"
  } else{
    console.log("Error")
  }
}
