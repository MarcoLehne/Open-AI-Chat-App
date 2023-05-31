const inputFieldId = "input-field";

export function disableInputField() {
    const inputField = document.getElementById(inputFieldId);
    inputField.disabled = true;
}