let userName = prompt("Ismingizni kiriting:");

if (!userName || userName.trim() === "") {
  userName = "Noma'lum foydalanuvchi";
}

const heading = document.createElement("h1"); 

const paragraph = document.createElement("p"); 
paragraph.textContent = `${userName}`; 


document.body.appendChild(heading); 
document.body.appendChild(paragraph); 
