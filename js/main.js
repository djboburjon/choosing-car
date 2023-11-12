const form = document.getElementById("form")
const inp_name = document.querySelector(".inp_name")
const inp_speed = document.querySelector(".inp_speed")
const inp_price = document.querySelector(".inp_price")
const inp_url = document.querySelector(".inp_url")
const inp_color = document.querySelector(".inp_color")
const left_btn = document.querySelector(".left_btn")
const cards = document.querySelector(".cards")
const card = document.querySelector(".card")
const card_img = document.querySelector(".card_img")
const card_name = document.querySelector(".card_name")
const card_speed = document.querySelector(".card_speed")
const card_price = document.querySelector(".card_price")
const card_color = document.querySelector(".card_color")

let carData = []

let addProd = (info)=> {
  
if (info.length == 0) {
  cards.innerHTML = `
    <h1>Please, Choose your car. </h1>
  `
} else {

  cards.innerHTML = ""
  info.forEach((item) => {
    cards.innerHTML += `
    <div class="card">
    <img
      src="${item.img}"
      alt="Car image"
      class="card_img"
      width="300px"
      height="300px"
    />
    <h2 class="card_name">${item.carName} <button onclick="removeCar(${item.id})">Delete</button></h2>
    <hr />
    <h3>Speed: <span class="card_speed">${item.carSpeed}</span> km/h</h3>
    <hr />
    <h3>Price: $ <span class="card_price">${item.carPrice}</span></h3>
    <hr />
    <h3>Color: <span class="card_color">${item.carColor}</span> <span style="display: inline-block; background-color: ${item.carColor}; width: 14px; height: 14px;"></span></h3>
    <hr />
    <div class="links">
      <a href="#">More imgs</a>
      <a href="#">Another link</a>
    </div>
  </div>
    `
  });
}
}



form.addEventListener("submit", function(event){
  event.preventDefault()
  let obj = {
    img: left_btn.parentElement.querySelector(".inp_url").value,
    carName: left_btn.parentElement.querySelector(".inp_name").value,
    carSpeed: left_btn.parentElement.querySelector(".inp_speed").value,
    carPrice: left_btn.parentElement.querySelector(".inp_price").value,
    carColor: left_btn.parentElement.querySelector(".inp_color").value,
    id: Math.random() * 100,
  }
  if ((inp_url.value && inp_name.value && inp_speed.value && inp_price.value && inp_color.value) == "") {
    alert("Plese enter full information!")
  } else {
    carData.push(obj)
    addProd(carData)

    inp_url.value = ""    
    inp_name.value = ""
    inp_speed.value = ""
    inp_price.value = ""
    inp_color.value = ""
    
  }
})


const removeCar = (id)=> {
  carData = carData.filter((item)=> {
    return item.id != id
  })
  addProd(carData)
}

addProd(carData)