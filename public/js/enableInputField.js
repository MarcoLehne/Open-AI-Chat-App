const inputFieldId = "input-field";

export function enableInputField() {
    const inputField = document.getElementById(inputFieldId);
    inputField.disabled = false;
}