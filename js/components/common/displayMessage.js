const displayMessage = (cssClass, errorMessage, htmlTag) => {
  console.log(htmlTag);
  const element = document.querySelector(htmlTag);
  console.log(element);
  element.innerHTML = ` <div class="alert ${cssClass}" role="alert">${errorMessage}</div>`;
};

export default displayMessage;
