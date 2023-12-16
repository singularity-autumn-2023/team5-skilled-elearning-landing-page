const appDiv = document.getElementById("app");

const htmlFilePath = "./header/header.html"; // Используем относительный путь к файлу header.html
fetch(htmlFilePath)
  .then(response => response.text())
  .then(htmlContent => {
    if (appDiv) {
      appDiv.innerHTML = htmlContent;
    }
  })
  .catch(error => {
    console.error("Ошибка загрузки файла:", error);
  });
