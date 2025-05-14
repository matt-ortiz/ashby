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
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const tourForm = document.getElementById('tourForm');
    const modal = document.getElementById('confirmationModal');
    
    if (tourForm) {
        tourForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For now, we'll just show the confirmation modal
            
            // Get form data
            const formData = new FormData(tourForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Log form data to console (for development purposes)
            console.log('Form submitted:', formDataObj);
            
            // Show confirmation modal
            if (modal) {
                modal.style.display = 'block';
            }
            
            // Reset form
            tourForm.reset();
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
