// 1. Function to find the first unique number  
function findFirstUniqueNumber(arr) {  
    const numFrequency = {};  

    // Count occurrences of each number  
    for (const num of arr) {  
        numFrequency[num] = (numFrequency[num] || 0) + 1;  
    }  

    // Find the first unique number  
    for (const num of arr) {  
        if (numFrequency[num] === 1) {  
            return num;   
        }  
    }  
    
    return -1;  
}  

// Event listener for the button click  
document.getElementById('findButton').addEventListener('click', function() {  
    const input = document.getElementById('arrayInput').value;  
    const numberArray = input.split(',').map(num => num.trim()).filter(num => num !== '');   
    const result = findFirstUniqueNumber(numberArray);  

    const resultDisplay = document.getElementById('result');  
    resultDisplay.textContent = result !== -1 ? `First unique number: ${result}` : '-1';  
});

// ---------------------------------------------------------------------------------------

// 2.Function to find the index if given string is having reverse characters  
function solution(S) {  
    const len = S.length;  
    
    for (let i = 0; i < len; i++) {  
        const left = S.substring(0, i);  
        const right = S.substring(i + 1);   
        
        // Check if the left part is the reverse of the right part  
        if (left === right.split('').reverse().join('')) {  
            return i;
        }  
    }  
    
    return -1;   
}  

// Event listener for the button click  
document.getElementById('checkButton').addEventListener('click', function() {  
    const inputString = document.getElementById('inputString').value;   
    const resultIndex = solution(inputString);   
    const resultDisplay = document.getElementById('reverse');  
 
    if (resultIndex !== -1) {  
        resultDisplay.textContent = `Index: ${resultIndex}`;  
    } else {  
        resultDisplay.textContent = `Index:No such index present`;  
    }  
});

// -----------------------------------------------------------------------------------

// 3. Likes button  
let likesCount = 100;  

        const likeButton = document.getElementById('likeButton');  
        const likesCounter = likeButton.querySelector('.likes-counter');  
  
        let isLiked = false;  

        // Function to update the button text  
        function updateButton() {  
            likesCounter.textContent = likesCount;   
            likeButton.textContent = isLiked ? `Liked | ` : `Like | `; 
            likeButton.append(likesCounter);   
        }  

        // Event listener for the button click  
        likeButton.addEventListener('click', () => {  
            if (isLiked) {  
                // If already liked, decrement the count and set isLiked to false  
                likesCount--;  
                isLiked = false; 
                likeButton.classList.remove('liked'); 
            } else {  
                // If not liked, increment the count and set isLiked to true  
                likesCount++;  
                isLiked = true;
                likeButton.classList.add('liked');  
            }  
            updateButton();   
        });  

        // Initial setup  
        updateButton();  