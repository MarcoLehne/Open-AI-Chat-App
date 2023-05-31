const submitBtnId = "submit-btn";

export function disableSubmit() {
    const submitBtn = document.getElementById(submitBtnId);
    submitBtn.disabled = true;
}