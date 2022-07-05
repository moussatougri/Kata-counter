let count = document.querySelector(".counter")
const incrementBtn = document.querySelector(".increment")
const decrementBtn = document.querySelector(".decrement")

console.log(count)


function incrementCount() {
  return count.innerText ++
};

function decrementCount() {
  return count.innerText --
};

incrementBtn.addEventListener("click", incrementCount);
decrementBtn.addEventListener("click", decrementCount);