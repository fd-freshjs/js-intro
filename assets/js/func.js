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
  switch (lang) {
    case "ua":
      console.log("ua case");
      return "Добридень";
    case "is":
      console.log("is case");
      return "Hola";
  }

  return "Hello";
}

const res1 = helloPhraseV2("");

console.log(res1);
