const inputFieldId = "input-field";

export function emptyInputField() {
    const inputField = document.getElementById(inputFieldId);
    inputField.value = '';
}