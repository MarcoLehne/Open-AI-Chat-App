const modelSelectionId = "model-selection";

export function disableModelSelection() {
    const modelSelection = document.getElementById(modelSelectionId);
    modelSelection.disabled = true;
}