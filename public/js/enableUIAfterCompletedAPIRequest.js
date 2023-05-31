import { enableSubmit } from "./enableSubmit.js";
import { enableInputField } from "./enableInputField.js";
import { enableModelSelection } from "./enableModelSelection.js";
import { emptyInputField } from "./emptyInputField.js";

export function enableUIAfterCompletedAPIRequest() {
    enableSubmit();
    enableInputField();
    enableModelSelection();
    emptyInputField();
}