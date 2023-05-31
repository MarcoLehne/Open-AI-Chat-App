const submitBtnId = "submit-btn";

export function enableSubmit() {
    const submitBtn = document.getElementById(submitBtnId);
    submitBtn.disabled = false;
}