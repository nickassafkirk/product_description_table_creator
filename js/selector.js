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

let optionalHeadings = document.querySelectorAll('.optional-model-heading');
enableModelField ()

/* Extract checkbox values from form */
function getFormValues() {
    let selectedValues = document.querySelectorAll('.field-option-wrapper input[type="checkbox"]:checked');
    let valueIDs = [];
    selectedValues.forEach(value => {
        valueIDs.push(value.name)
    })
    return valueIDs;
}

/* Extract heading values from form fields */
function getHeadings() {
    let headingNames = checkOptionalHeadings();
    console.log(headingNames)
    let headingsTemplate = "<th></th>";
    headingNames.forEach(name => {
        headingsTemplate += `<th>${name}</th>`
    })
    let headings = `<tr>${headingsTemplate}</tr>`
    return {
        output: headings,
        number: headingNames.length
    };
}

/* Creates HTML Output */
function createTemplate() {
    const formValues = getFormValues();
    const headingsData = getHeadings();
    let rows = "";
    let columns = "<td></td>"
    let hasModels = 0;
    
    /* check if form has headings */
    if (headingsData.number >= 1) {
        columns = columns.repeat(headingsData.number);
        hasModels = 1;
    } else {
        columns = "<td></td>"
        hasModels = 0;
    };
    
    /* generate rows and columns */
    for (let value of formValues) {
        rows += `<tr><th>${value}</th>${columns}</tr>`
    };
    
    /* create completed template */
    let template;
    
    if (hasModels) {
        template = `<table><tbody class="specification-table">${headingsData.output}${rows}</tbody</table>`
    } else {
        template = `<table><tbody class="specification-table">${rows}</tbody</table>`
    }
    
    return template;
}

/* Prints HTML template output to page */
function insertTemplate(temp) {
    const outputBox = document.getElementById('output-wrapper');
    outputBox.style.display ="block";
    outputBox.innerText = temp;
}

/* Adds helper text to copy button on hover */
function showHelperText() {
    const helperText = document.getElementById('helper-text');
    helperText.style.visibility = 'visible';
}

/* Hides helper text when cursor off copy button */
function hideHelperText() {
    const helperText = document.getElementById('helper-text');
    helperText.style.visibility = 'hidden';
}

/* Copies code output */
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

/* Checks if model field has been entered */
function checkOptionalHeadings () {
   let validHeadings = [];
   optionalHeadings.forEach(heading => {
        if (heading.value.length > 1){
            validHeadings.push(heading.value)
        }
    })
    return validHeadings;
}

/* Enables next model input once previous input has been filled */
function enableModelField () {
    let x = 1;
    optionalHeadings.forEach(heading => heading.addEventListener('change', function(){
        if (x <= optionalHeadings.length) {
            optionalHeadings[x].disabled = 0;
            x += 1;
        }
    }))
}

/* Auto selct headings for selected brands */
const presetSelect = document.getElementById('presets');
presetSelect.addEventListener('change', selectPresets);

function selectPresets() {
    let selectedOption = presetSelect.options[presetSelect.selectedIndex].value.toLowerCase();
    let targetFormOptions = document.querySelectorAll(`.${selectedOption}`);
    console.log(selectedOption, targetFormOptions);
    targetFormOptions.forEach(formOption => {
        formOption.checked = true;
    })
}

let resetButton = document.getElementById('reset-form');
resetButton.addEventListener('click', clearSelection);

function clearSelection() {
    const allFormOptions = document.querySelectorAll('.field-option-wrapper input');
    allFormOptions.forEach(option => {
        option.checked = false;
    })
    let allPresets = presetSelect.options;
    allPresets[0].selected = true;
}


/* Creates new model heading input 
function addNewModelField(x) {
    let lastHeading = document.querySelector('.model-heading-form-section');
        let newDiv = document.createElement('div');
        newDiv.className = 'model-heading-wrapper';
        const newHeadingHTML = `
        <label for="Model_name_${x+1}">Add Model Name</label>
        <input class="optional-model-heading" type="text" name="Model Name ${x+1}" id="Model_name_${x+1}">
        `
        newDiv.innerHTML = newHeadingHTML;
        lastHeading.appendChild(newDiv)
        return newDiv;
} */





/*function getFormHeadings() {
    let selectedHeadings = document.querySelectorAll('.heading-option-wrapper input[type="checkbox"]:checked');
    let headingIDS = [];
    selectedHeadings.forEach(heading => {
        headingIDS.push(heading.id)
    })
}*/

