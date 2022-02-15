export const arrayWithTextData = (locator) => {
    let arrayWithTextData = [];
    let cypressArray = Cypress.$(locator);
    
    for (let i = 0; i < cypressArray.length; i++) {
        if (cypressArray[i].textContent.trim() !== "") {
            arrayWithTextData.push(cypressArray[i].textContent);
        };
    };
    return arrayWithTextData;
};