const init = function(){
    const injectElement = document.createElement('div');
    injectElement.id = 'inject';
    injectElement.innerHTML = 'Injected!';
    const ingredientsElement = document.getElementsByClassName('ingredients_ingredients__2Uv-Z')[0];
    const ingredientText = ingredientsElement.innerText;
    console.log(ingredientText);
    const ingredientsDivWrap = ingredientsElement.childNodes[2];
    ingredientsDivWrap.appendChild(injectElement);
}
init();