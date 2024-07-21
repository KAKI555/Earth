var height = screen.height
var width = screen.width

document.addEventListener('DOMContentLoaded', function() {
    const navbarItems = document.querySelectorAll('.Navbar-Items');

    navbarItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            navbarItems.forEach(link => {
                link.classList.remove('active');
            });

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
    const facts = document.querySelectorAll('#Facts-Content .Search-able');

    facts.forEach(item => {
        const content = item.textContent.toLowerCase();
        const words = content.split(/\s+/);
        const searchWords = searchTerm.split(/\s+/);

        let found = false;
        searchWords.forEach(searchWord => {
            if (words.some(word => word.includes(searchWord))) {
                found = true;
            }
            else {
                found = false;
            }
        });

        if (found || searchTerm === '') {
            item.parentElement.style.display = 'block';
            document.getElementById('not-found').style.display = 'none';
        } else {
            item.parentElement.style.display = 'none';
            document.getElementById('not-found').style.display = 'block';
        }
    });
}

const searchInput = document.getElementById('Search-Input');
searchInput.addEventListener('input', performSearch);

if (height >  812 ){
const searchInput = document.getElementById('Search-Input');
searchInput.addEventListener('input', performSearch);
}
if (height <  812 ){
const searchButton = document.getElementByclass('Search-Button');
searchButton.style.display = "none";
}

