## intro
This is a simple application to generate a html template for a specifications or geometry table to be used in the product description for a product on shopify.
This tool is specifically designed for use with bikes and frames but could be used as a template for other types of product.

## Instructions

The form template tools is divided into three section:
1. Add Model Names
1. Presets
1. Choose Headings

### 1: Add Model Names:
    Some brands choose to add all models in a product range's specification in a single table. 
    For Example: Transition and Nukeproof use this format.
    Adding model names to the text fields on the form will add these model names in the first row of the table as headings.
    If no model names are needed, these fields can be left blank.

### 2: Presets:
    Presets allow form templates to be quickly created by automatically selecting the relevant form headings based on the brand, product type etc...
    These presets work by adding a class name to each relevant form option.
    To add a new preset, simply add a new <option> with the name and value of the preset you'd like to add to the form <select name="presets" id="presets">
    Then add a class that is same the <option> value to each form checkbox that you'd like to be selected for this preset.

### 3: Choose Headings:
    Simply select the checkbox for each heading you would like included in your table. Each selected heading will be created as a <th> element in a new form row.
    If no model names have been added, a single empty <td> element will be added in the same row, if model names have been added, then each row will contain am empty <td> for each model.

Once all relevant headings have been selected, the html template will be printed in the output box in plain text. This can then be copied and pasted into the description box in the Shopify product editor.