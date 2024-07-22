// Function to show details in the sidebar
function showDetails(name, description, age, mass, gravity, atmosphere, imgPath) {
    // Get sidebar elements
    const sidebar = document.getElementById('sidebar');
    const sidebarImg = document.getElementById('sidebar-img');
    const nameElem = document.getElementById('name');
    const descriptionElem = document.getElementById('description');
    const ageElem = document.getElementById('age');
    const massElem = document.getElementById('mass');
    const gravityElem = document.getElementById('gravity');
    const atmosphereElem = document.getElementById('atmosphere');

    // Check if all elements exist
    if (sidebar && sidebarImg && nameElem && descriptionElem && ageElem && massElem && gravityElem && atmosphereElem) {
        // Show the sidebar
        sidebar.style.display = 'flex';

        // Replace content with the specific details
        nameElem.textContent = name;
        descriptionElem.textContent = description;
        ageElem.textContent = age ? age : 'N/A';
        massElem.textContent = mass ? mass : 'N/A';
        gravityElem.textContent = gravity ? gravity : 'N/A';
        atmosphereElem.textContent = atmosphere ? atmosphere : 'N/A';

        // Set image only if it's not Asteroid Belt
        if (name !== 'Asteroid Belt') {
            sidebarImg.src = imgPath;
            sidebarImg.alt = name;
            sidebarImg.style.display = 'block';
        } else {
            // Hide image for Asteroid Belt
            sidebarImg.style.display = 'none';
        }

        // Remove grow effect from all celestial bodies and moons
        document.querySelectorAll('.celestial-body, .moon').forEach(body => {
            body.style.transform = 'scale(1)';
        });

        // Apply grow effect only to the clicked celestial body
        if (name !== 'Asteroid Belt') { // Exclude Asteroid Belt from hover effect
            const element = document.querySelector(`.celestial-body.${name.toLowerCase()}`);
            if (element) {
                element.style.transform = 'scale(1.1)';
            }
        }
    } else {
        console.error('One or more elements are missing.');
    }
}

// Function to close the sidebar
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
    
    // Remove grow effect from all celestial bodies and moons
    document.querySelectorAll('.celestial-body, .moon').forEach(body => {
        body.style.transform = 'scale(1)';
    });
}

// Hover effect for celestial bodies and moons, excluding Asteroid Belt
document.querySelectorAll('.celestial-body, .moon').forEach(body => {
    body.addEventListener('mouseover', function(event) {
        event.stopPropagation();
        if (!this.classList.contains('asteroid-belt')) {
            this.style.transform = 'scale(1.1)';
        }
    });

    body.addEventListener('mouseout', function(event) {
        if (!this.classList.contains('asteroid-belt')) {
            this.style.transform = 'scale(1)';
        }
    });
});
