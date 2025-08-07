function processinput() {

    const rawInputText = document.getElementById('inputtext').value;
    const outputTextBox = document.getElementById('outputtext');
    const inputList = rawInputText.split('\n').filter(item => item.trim() !== '');

    const resultList = getUniqueValues(inputList);

    if (resultList.length > 0) {
        outputTextBox.textContent = resultList.join('\n');
    } else {
        outputTextBox.textContent = "no unique values";
    }



}

function getUniqueValues(inputArray) {
    return inputArray.filter(value => inputArray.indexOf(value) === inputArray.lastIndexOf(value));
}
