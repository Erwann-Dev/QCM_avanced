function traitement_result(nquestion) {
	repa = document.getElementById("rep"+nquestion+"a");
  repb = document.getElementById("rep"+nquestion+"b");
  repc = document.getElementById("rep"+nquestion+"c");
  var user_rep = ""
  var user_rep=""
  if (repa.checked == true){
    user_rep = user_rep + "A";
  }
  if (repb.checked == true){
    user_rep = user_rep + "B";
  }
  if (repc.checked == true){
    user_rep = user_rep + "C";
  }
  console.log("Reponse user : ",user_rep);
  return user_rep
}

function verif(user_rep,good_rep){
  var note = 0
  for (i=1;i<=good_rep.length;i++){
    x=i-1
    if (user_rep[x]==""){
      user_rep[x]="Pas de reponse"
    }
    rep = document.getElementById("rep"+i)
    notehtml = document.getElementById("note")
    if (user_rep[x]==good_rep[x]){
      note += 1;
      rep.innerHTML = "<li><h3><a id='good'>"+user_rep[x]+"</a> est la bonne reponse<h3></li>";
      console.log("Rep ",i," Valide")
    }
    else{
      rep.innerHTML = "<li><h3><a id='bad'>"+user_rep[x]+"</a> la bonne reponse etait : <a id='good'>"+good_rep[x]+"</a><h3></li>"
      console.log("Rep ",i," Pas Valide")
    }
    notehtml.innerHTML = "<h2 id='note'>Note :"+note+"/3</h2>"
    console.log(note)
  }
}

function prog(){
  div_right = document.getElementById("right")
  var good_rep = ["A","B","BC"]
  var rep_user_tot = []
  var tot_question = good_rep.length
  for (i = 1; i <= tot_question; i++) {
    console.log("Question : ",i)
    rep_user_tot.push(traitement_result(i))
  }
  console.log(rep_user_tot)
  verif(rep_user_tot,good_rep)
  div_right.style.visibility = "visible";
}