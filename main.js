document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.Navbar-Items');

    navbarItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove 'active' class from all navigation items
            navbarItems.forEach(link => {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked navigation item
            this.classList.add('active');

            var clickedId = this.id;
            console.log('Clicked ID:', clickedId);
            
            const contentSections = document.querySelectorAll('.content');
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            if (clickedId === 'A') {
                document.getElementById('Home').style.display = 'block';
            } else if (clickedId === 'B') {
                document.getElementById('Facts').style.display = 'block';
            } else if (clickedId === 'C') {
                document.getElementById('Help').style.display = 'block';
            } else if (clickedId === 'D') {
                document.getElementById('About').style.display = 'block';
            }
        });
    });
});
function performSearch() {
    const searchTerm = document.getElementById('Search-Input').value.trim().toLowerCase();
    console.log('Button pressed');

    // Check if search term is empty
    if (searchTerm === '') {
        console.log('Please enter a search term.');
        return; // Exit function early if no search term
    }

    // Select all elements with class .Search-able within #Tool-Content
    const toolContent = document.querySelectorAll('#Tool-Content .Search-able');

    // Loop through each .Search-able element
    toolContent.forEach(item => {
        const content = item.textContent.toLowerCase();

        if (content.includes(searchTerm)) {
            item.closest('#Tool-Content').style.display = 'block'; // Display the parent content section
            console.log('Found:', searchTerm);
            document.getElementById("not-found").style.display ="none"
        } else {
            item.closest('#Tool-Content').style.display = 'none'; // Hide the parent content section
            document.getElementById("not-found").style.display ="Block"
        }
    });
}



