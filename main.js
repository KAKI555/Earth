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

    // Add event listener for input changes in the search input field
    const searchInput = document.getElementById('Search-Input');
    searchInput.addEventListener('input', function() {
        performSearch();
    });

    function performSearch() {
        const searchTerm = document.getElementById('Search-Input').value.trim().toLowerCase();
        console.log('Search term:', searchTerm);

        const toolContent = document.querySelectorAll('#Fact-Content .Search-able');
        toolContent.forEach(item => {
            const content = item.textContent.toLowerCase();
         
            if (searchTerm === '' || content.includes(searchTerm))  {
                item.closest('#Tool-Content').style.display = 'block';
                console.log('Found:', searchTerm);
                document.getElementById('not-found').style.display = 'none';
            } else {
                item.closest('#Tool-Content').style.display = 'none';
                document.getElementById('not-found').style.display = 'block';
            }
        });
    }
});
