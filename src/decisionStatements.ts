if (true) console.log("Check 1");

if (false) {
  console.log("This should not print");
}

if (false) {
    console.log("This should not print");
  } else {
    console.log("Check 2");
  }

  if (false) {
    console.log("This should not print");
  } else if (false) {
    console.log("This should not print");
  } else if (true) {
    console.log("Check 3");
  }

let thing = "ping";
switch (thing) {
  case "pong":
    console.log("This should not print");
    break;
  case "pong2":
    console.log("This should not print");
    break;
  case "pong3":
    console.log("This should not print");
    break;
  case "ping":
    console.log("Check 4");
    break;
  default:
    console.log("This should not print");
}