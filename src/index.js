let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });//end of click button to add new toy event listener

  const toyCollection = document.querySelector("#toy-collection")

  //create a functiont o create a toy info card
  function createToyCard(name, src, likes) {
    let card = document.createElement("div");
    let h2 = document.createElement("H2");
    let img = document.createElement("IMG")
    let p = document.createElement("p")
    card.className = "card"
    img.className = "toy-avatar"
    img.src = src
    h2.textContent = name //assign h2 value of name
    p.className = "likes"
    p.textContent = likes
    card.appendChild(h2) //assing h2 to card div
    card.appendChild(img) //add img to card div


    toyCollection.appendChild(card)//adds new div to toycollection div
  }

}); //end of domcontentloadedeventlistner
