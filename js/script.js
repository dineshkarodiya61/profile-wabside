const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const fullName = "𝑯𝒆𝒍𝒍𝒐, 𝑰'𝒎 𝐃𝐢𝐧𝐞𝐬𝐡 𝐊𝐚𝐫𝐨𝐝𝐢𝐲𝐚";
let idx = 0;
function typeWriter() {
 if (idx < fullName.length) {
 document.getElementById("typing").innerHTML += fullName.charAt(idx);
 idx++;
  setTimeout(typeWriter, 120);
 } else {
  document.getElementById("typing").classList.add("no-cursor");
  }
}
window.onload = typeWriter;