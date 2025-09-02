

const buttons = document.querySelectorAll('.copy-btn');
for (const button of buttons) {
    button.addEventListener('click', function () {
        alert('copied to clipboard')
        const catchCopyCount = document.getElementById('copy-count')
        const intCatchCopyCount = parseInt(catchCopyCount.innerText)
        const newCopyCount = intCatchCopyCount + 1;
        catchCopyCount.innerText = newCopyCount;
    }
    )
}