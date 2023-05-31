const modelSelectionId = "model-selection";

export function enableModelSelection() {
    const modelSelection = document.getElementById(modelSelectionId);
    modelSelection.disabled = false;
}