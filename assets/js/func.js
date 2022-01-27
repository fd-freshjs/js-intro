// фраза на одном из языков в зависимости от запроса
function helloPhrase(lang) {
  if (lang === "ua") {
    return "Добридень";
  } else if (lang === "jp") {
    return "Ohayo";
  } else if (lang === "is") {
    return "Hola";
  }

  return "Hello";
}

const res = helloPhrase("is");

console.log(res);

function helloPhraseV2(lang) {
  let phrase;

  switch (lang) {
    case "ru":
    case "ua":
      console.log("ua case");
      phrase = "Добридень";
      break;
    case "is":
      console.log("is case");
      phrase = "Hola";
      break;
    case "jp":
      console.log("jp case");
      phrase = "Ohayo";
      break;
    default:
      phrase = "Hello"
      break;
  }

  return phrase;
}

const res1 = helloPhraseV2("");

console.log(res1);
