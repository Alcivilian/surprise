// Password
const PASSWORD = "Aly";

// Elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const error = document.getElementById("error");
const lockScreen = document.getElementById("lockScreen");
const proposalScreen = document.getElementById("proposalScreen");
const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");
const answer = document.getElementById("answer");

// Unlock proposal
passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value === PASSWORD) {
    error.textContent = "";
    lockScreen.classList.add("hidden");
    proposalScreen.classList.remove("hidden");
    proposalScreen.setAttribute("aria-hidden", "false");
    document.title = "For Saji ❤️";
  } else {
    error.textContent = "Hmm… that's not the secret password. ❤️";

    passwordInput.classList.remove("shake");
    void passwordInput.offsetWidth;
    passwordInput.classList.add("shake");

    passwordInput.select();
  }
});

// Yes
yesBtn.addEventListener("click", () => {
  answer.textContent =
    "You just made the Beast the happiest person alive. ❤️";

  launchConfetti();
});

// Think
thinkBtn.addEventListener("click", () => {
  answer.textContent =
    "Okay… I'll wait. But I'm really hoping for that YES. 🥹❤️";
});

// Confetti
function launchConfetti() {
  const container = document.getElementById("confetti");

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti-piece";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.setProperty(
      "--x",
      Math.random() * 220 - 110 + "px"
    );

    piece.style.animationDelay =
      Math.random() * 0.8 + "s";

    piece.style.animationDuration =
      2.2 + Math.random() * 1.8 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 4500);
  }
}
