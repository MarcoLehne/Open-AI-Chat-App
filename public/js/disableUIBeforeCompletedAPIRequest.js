import { disableSubmit } from "./disableSubmit.js";
import { disableInputField } from "./disableInputField.js";
import { disableModelSelection } from "./disableModelSelection.js";

export function disableUIBeforeCompletedAPIRequest() {
    disableSubmit();
    disableInputField();
    disableModelSelection();
}