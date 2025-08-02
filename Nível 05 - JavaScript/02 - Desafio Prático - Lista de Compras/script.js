const input = document.querySelector("#product");
const button = document.querySelector("button");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" />
    <div class="item-checkbox"></div>
    <label>${input.value}</label>
    <img
      class="trash"
      src="assets/icons/trash.svg"
      alt="Ícone de lixeira"
    />
  `;
  ul.appendChild(li);
  input.value = "";
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("trash")) {
    const li = event.target.closest("li");
    li.remove();
    modal.style.display = "flex";
  }
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
