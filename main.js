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
                document.getElementById('Tools').style.display = 'block';
            } else if (clickedId === 'C') {
                document.getElementById('Help').style.display = 'block';
            } else if (clickedId === 'D') {
                document.getElementById('About').style.display = 'block';
            }
        });
    });
});
