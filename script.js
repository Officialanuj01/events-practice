
// challenge1
const myName = document.getElementById("user");
window.onload=()=>{
  user.innerHTML = "ANUJ"
}

// challenge2
const button = document.getElementById("btn-click");
button.addEventListener("click",()=>{
  button.style.backgroundColor = "yellow"

}
)

// challenge3
function makeSentance(){
  const nounn = document.getElementById("noun").value
  const verbb = document.getElementById("verb").value
  const adverbb = document.getElementById("adverb").value

  const box = document.getElementById("statement")
  box.textContent = `${nounn} ${verbb} ${adverbb}`
}

const senatanceButton = document.getElementById("build-button");
senatanceButton.addEventListener("click",makeSentance)

// challeng4.1

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click",(e) =>{
  console.log("grandparent clicked")
},false)

const parent = document.getElementById("parent");
parent.addEventListener("click",(e) =>{
  console.log("parent clicked")
},false)

const child = document.getElementById("child");
child.addEventListener("click",(e) =>{
  console.log("child clicked")

},false)

// challenge4.2

const grandparent42 = document.getElementById("grandparent");
grandparent.addEventListener("click",(e) =>{
  console.log("grandparent clicked")
},true)

const parent42 = document.getElementById("parent");
parent.addEventListener("click",(e) =>{
  console.log("parent clicked")
},true)

const child42 = document.getElementById("child");
child.addEventListener("click",(e) =>{
  console.log("child clicked")

},true)



// challenge5
const cate = document.getElementById("category");
cate.addEventListener("click", (e)=>{
  if(e.target.tagName === 'LI'){
    console.log(e.target.textContent)
    
  }
  e.stopPropagation()
  
})