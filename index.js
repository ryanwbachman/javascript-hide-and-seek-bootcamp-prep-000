function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  let current = document.getElementById("grand-node");
  let child = current.children[0];

  while(child){
    current = child;
    child = child.children[0];
  }

  return current;
}

function increaseRankBy(n){
  const rl = document.querySelectorAll(".ranked-list li");

  for(var i=0; i<rl.length; i++){
    rl[i].innerHTML = parseInt(rl[i].innerHTML)+n;
  }
}
