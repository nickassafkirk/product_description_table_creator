/* Add click event for create Html Template button*/ 
const button = document.getElementById('submit-btn');
button.addEventListener('click', function(){
    const finalTemplate = createTemplate();
    insertTemplate(finalTemplate);
});

/* Add helper text to copy button on hover */
const copyButton = document.getElementById('copy-to-clipboard');
copyButton.addEventListener('mouseover', showHelperText)
copyButton.addEventListener('mouseout', hideHelperText)
copyButton.addEventListener('click',copyCode);

function getFormValues() {
    let selectedValues = document.querySelectorAll('.field-option-wrapper input[type="checkbox"]:checked');
    let valueIDs = [];
    selectedValues.forEach(value => {
        valueIDs.push(value.name)
    })
    return valueIDs;
}

function createTemplate() {
    let formValues = getFormValues();
    let rows = "";
    for (let value of formValues) {
        rows += `<tr><th>${value}</th><td></td></tr>`
    };
    let template = `<table><tbody class="specification-table">${rows}</tbody</table>`
    return template;
}

function insertTemplate(temp) {
    const outputBox = document.getElementById('output-wrapper');
    outputBox.style.display ="block";
    outputBox.innerText = temp;
}

function showHelperText() {
    const helperText = document.getElementById('helper-text');
    helperText.style.visibility = 'visible';
}

function hideHelperText() {
    const helperText = document.getElementById('helper-text');
    helperText.style.visibility = 'hidden';
}

function copyCode() {
    let codeTemplate = document.getElementById('output-wrapper').innerText;
    console.log(codeTemplate)
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(codeTemplate);
            console.log()
        } catch (err) {
            console.log('failed to copy: ', err)
        }
    }
    return copyContent;
}








/*function getFormHeadings() {
    let selectedHeadings = document.querySelectorAll('.heading-option-wrapper input[type="checkbox"]:checked');
    let headingIDS = [];
    selectedHeadings.forEach(heading => {
        headingIDS.push(heading.id)
    })
}*/

