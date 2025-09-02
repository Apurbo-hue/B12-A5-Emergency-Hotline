//logic of heart count
const hearts = document.querySelectorAll('.heart-btn');
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        const heartCount = document.getElementById('heart-count')
        const intHeartCount = parseInt(heartCount.innerText)
        const newHeartCount = intHeartCount + 1;
        heartCount.innerText = newHeartCount;
    })
}

//logic of call button star count
const stars = document.querySelectorAll('.call-btn');
for (const star of stars) {
    star.addEventListener('click', function () {
         
       
        const catchStarCount = document.getElementById('stars')
        const intCatchStarCount = parseInt(catchStarCount.innerText)

        if (intCatchStarCount < 20) {
            alert("Not enough stars!");
            return; 
        }

        const newStarCount = intCatchStarCount - 20;
        catchStarCount.innerText = newStarCount;
    }
    )
}
const callButtons = document.querySelectorAll('.call-btn');
const historyContainer = document.getElementById('call-history'); 

for (const button of callButtons) {
    button.addEventListener('click', function () {
        
        const card = this.closest('.w-2xs');

       
        const serviceName = card.querySelector('h1').innerText;

       
        const number = card.querySelector('.target-txt').innerText;

       
        alert(`Calling ${serviceName}\nNumber: ${number}\n`);

       
        if (historyContainer) {
            const entry = document.createElement('div');
            entry.textContent = `${serviceName} - ${number}`;
            historyContainer.appendChild(entry);
        }
    });
}




//logic of copy count 
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