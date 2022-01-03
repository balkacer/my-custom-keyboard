const ControlKeys = [
  "Control1",
  "Control1",
  "Alt",
  "Shift1",
  "Shift2",
  "Meta1",
  "CapsLock",
  "Escape",
  "Backspace",
  "Space",
  "Enter",
  "Tab",
];

function getKeyFortmated(e) {
  e.preventDefault();
  let keyPressed = e.key;

  if (e.key === " ") {
    return "Space";
  }

  if (e.location > 0) {
    return keyPressed + e.location;
  }

  return keyPressed;
}

document.onkeydown = function (e) {
  let keyPressed = getKeyFortmated(e);
  let typing = document.getElementById("typing");

  if (e.location <= 0 && !ControlKeys.includes(keyPressed)) {
    typing.innerHTML += keyPressed;
  } else if (keyPressed === "Backspace") {    
    typing.innerText = typing.innerText.slice(0, typing.innerText.length - 1);
  } else if (keyPressed === "Enter") {
    typing.innerHTML += "<br>";
  } else if (keyPressed === "Space") {
    typing.innerHTML += "&nbsp;";
  } else if (keyPressed === "Tab") {
    typing.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
  }

  document.getElementById(keyPressed.toLowerCase())?.classList.add("pressed");
  let keyHistory = document.getElementById("key-history");

  let key = document.createElement("span");
  let keyId = keyPressed + "_key";

  key.classList.add("key");
  key.innerText = keyPressed;
  key.id = keyId;

  keyHistory.appendChild(key);

  setTimeout(() => {
    keyHistory.removeChild(key);
  }, 1000);

  console.log(keyPressed + e.location);
};

document.onkeyup = function (e) {
  let keyPressed = getKeyFortmated(e);

  document
    .getElementById(keyPressed.toLowerCase())
    ?.classList.remove("pressed");
};
