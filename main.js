let result =document.getElementById("result");
function resetClick(){
    result.value="0";
}
function numClick(val){
  if(result.value=="0" && val=="0"){
    result.value="0";
  }else if(result.value=="0" && val=="."){
    result.value="0.";
  }else if(result.value=="0"){
    result.value=val;
  }else{
    result.value+=val;
  }
}
function opeClick(val){
  if(opeLast()){
    result.value=result.value.slice(0,-1)+val;
  }else{
    result.value+=val;
  }
}
function equalClick(){
  if(opeLast()){
    result.value=result.value.slice(0,-1);
  }
  result.value =eval(result.value);
}
function opeLast(){
  return["+","-","*","/"].includes(result.value.toString().slice(-1));
}
