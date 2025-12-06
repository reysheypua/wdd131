let submissionData = {
    submissions: JSON.parse(localStorage.getItem('userSubmissions')) || []
};

function updateSubmissionCount() {
    const count = submissionData.submissions.length; 
    const messageElement = document.getElementById('submission-count-message');
    
    if (messageElement) {
        let message;
        if (count === 0) {
            message = `Be the first to share an example!`;
        } else if (count === 1) {
            message = `We have 1 great example so far.`;
        } else {
            message = `We have received ${count} insightful examples!`; 
        }
        
        messageElement.textContent = message;
    }
}

function handleSubmission(event) {
    event.preventDefault();

    const form = document.getElementById('user-submit-form');
    const nameInput = document.getElementById('submit-name');
    const emailInput = document.getElementById('submit-email');
    const exampleText = document.getElementById('submit-example');
    
    if (!nameInput.value || !emailInput.value || !exampleText.value) {
        alert("Please fill out all fields before submitting."); 
        return;
    }

    const newSubmission = {
        id: Date.now(),
        name: nameInput.value,
        email: emailInput.value,
        example: exampleText.value,
        date: new Date().toLocaleDateString()
    };
    
    submissionData.submissions.push(newSubmission);
    
    localStorage.setItem('userSubmissions', JSON.stringify(submissionData.submissions));
    
    alert(`Thank you, ${newSubmission.name}! Your example has been saved locally for review.`);

    form.reset();
    updateSubmissionCount();
}

document.addEventListener('DOMContentLoaded', () => {
    updateSubmissionCount();

    const form = document.getElementById('user-submit-form');
    
    if (form) {
        form.addEventListener('submit', handleSubmission);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-submit-form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = document.getElementById('submit-button');
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';

            if (!isAuthReady || !db) {
                 showTemporaryMessage("Database connection not ready. Please wait a moment.", true);
                 submitButton.disabled = false;
                 submitButton.textContent = 'SUBMIT';
                 return;
            }
            
            const name = document.getElementById('submit-name').value;
            const email = document.getElementById('submit-email').value;
            const example = document.getElementById('submit-example').value;

            try {
                await addDoc(collection(db, SUBMISSIONS_COLLECTION), {
                    name,
                    email,
                    example,
                    userId: userId,
                    timestamp: new Date()
                });

                showTemporaryMessage('Success! Thank you for your submission. Your contribution helps decode engagement.', false);
                this.reset();
            } catch (error) {
                console.error("Error adding document: ", error);
                showTemporaryMessage('Error: Submission failed. Check console for details.', true);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'SUBMIT';
            }
        });
    }

    let currentStep = 0;
    const totalSteps = 3;
    const steps = [
        "Step 1: Welcome to the Lab! (1/3)",
        "Step 2: Learn a Core Mechanic (2/3)",
        "Step 3: Submit Your First Idea! (3/3)",
        "Onboarding Complete! Congratulations!"
    ];

    const stepLabel = document.getElementById('step-label');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const nextStepButton = document.getElementById('next-step-button');
    const resetButton = document.getElementById('reset-button');
    
    if (stepLabel && progressBarFill && nextStepButton && resetButton) {
        
        function updateProgressBar() {
            const percentage = Math.round((currentStep / totalSteps) * 100);
            progressBarFill.style.width = `${percentage}%`;
            stepLabel.textContent = steps[currentStep];
    
            if (currentStep < totalSteps) {
                nextStepButton.textContent = `Complete Step (${percentage}%)`;
                nextStepButton.disabled = false;
                resetButton.style.display = 'none';
            } else {
                nextStepButton.textContent = 'Finished!';
                nextStepButton.disabled = true;
                resetButton.style.display = 'inline-block';
                progressBarFill.style.width = '100%'; 
            }
        }
        
        nextStepButton.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateProgressBar();
            }
        });
    
        resetButton.addEventListener('click', () => {
            currentStep = 0;
            updateProgressBar();
        });
    
        updateProgressBar();
    }
});