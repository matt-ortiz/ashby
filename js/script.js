// Image Gallery Functionality
function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Change main image
    mainImage.src = src;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => {
        if (thumb.getAttribute('src') === src) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
    
    console.log('Image changed to:', src);
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const tourForm = document.getElementById('tourForm');
    const modal = document.getElementById('confirmationModal');
    
    if (tourForm) {
        tourForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(tourForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Log form data to console (for development purposes)
            console.log('Form submitted:', formDataObj);
            
            // Submit form data using fetch API
            fetch("https://submit-form.com/MsKkwjfHo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formDataObj),
            })
            .then(function(response) {
                console.log('Form submission response:', response);
                
                // Show confirmation modal
                if (modal) {
                    modal.style.display = 'block';
                }
                
                // Reset form
                tourForm.reset();
            })
            .catch(function(error) {
                console.error('Form submission error:', error);
                alert('There was an error submitting the form. Please try again.');
            });
        });
    }
    
    // Close modal when clicking the close button
    const closeButton = document.querySelector('.close');
    if (closeButton && modal) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (modal && event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Set minimum date for tour scheduling to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        
        const formattedToday = yyyy + '-' + mm + '-' + dd;
        dateInput.setAttribute('min', formattedToday);
    }
});
