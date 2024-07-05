// Function to show details in the sidebar
function showDetails(name, description, age, mass, gravity, atmosphere, imgPath) {
    // Show the sidebar
    document.getElementById('sidebar').style.display = 'flex';
    
    // Replace content with the specific details
    document.getElementById('name').textContent = name;
    document.getElementById('description').textContent = description;
    if (age) {
        document.getElementById('age').textContent = age;
    }
    if (mass) {
        document.getElementById('mass').textContent = mass;
    }
    if (gravity) {
        document.getElementById('gravity').textContent = gravity;
    }
    if (atmosphere) {
        document.getElementById('atmosphere').textContent = atmosphere;
    }
    // Set image only if it's not Asteroid Belt
    if (name !== 'Asteroid Belt') {
        document.getElementById('sidebar-img').src = imgPath;
        document.getElementById('sidebar-img').alt = name;
        document.getElementById('sidebar-img').style.display = 'block';
    } else {
        // Hide image for Asteroid Belt
        document.getElementById('sidebar-img').style.display = 'none';
    }
    
    document.getElementById('sidebar-img').src = imgPath;
    document.getElementById('sidebar-img').alt = name;

    // Remove grow effect from all celestial bodies and moons
    document.querySelectorAll('.celestial-body, .moon').forEach(body => {
        body.style.transform = 'scale(1)';
    });

    // Apply grow effect only to the clicked celestial body
    if (name !== 'Asteroid Belt') { // Exclude Asteroid Belt from hover effect
        document.querySelector(`.celestial-body.${name.toLowerCase()}`).style.transform = 'scale(1.1)';
    }
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById('sidebar').style.display = 'none';
    
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




