// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    let correctAnswer = "4"; // Assuming "4" is the correct answer
    
    // Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if user selected an answer
    if (userAnswer) {
        userAnswer = userAnswer.value; // Get the value of the selected radio button
        // Compare user's answer with correct answer
        if (userAnswer === correctAnswer) {
            // Display correct feedback
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            // Display incorrect feedback
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // User didn't select any answer
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
