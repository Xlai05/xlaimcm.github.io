function showProfile() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="profile">
            <p>
                <strong>Hi! I'm Almar Louisse T. Inoferio</strong><br><br>
                I'm a second year college student in Bachelor of Science in Computer Science at Mapua Malayan Colleges of Mindanao. I am 20 years old and slightly happy but I'm still persevering in order to be better. I'm a pure Filipino blood and proud, that is probably why I love supporting locals. My interests are listening to music, watching reality shows, scrolling through social media, playing games, and coding.
            </p>
            <img src="asdsa.png" alt="Profile Image" />
        </div>
    `;
}

function showProjects() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="projects">
            <div class="project-item">
                <img src="project1.png" alt="Project 1">
                <button onclick="window.open('https://github.com/SavvSean/RentalContracts', '_blank')">Learn More</button>
            </div>
            <div class="project-item">
                <img src="project2.png" alt="Project 2">
                <button onclick="window.open('https://github.com/Xlai05/RestaurantReview', '_blank')">Learn More</button>
            </div>
            <div class="project-item">
                <img src="project3.png" alt="Project 3">
                <button onclick="window.open('HI.pdf', '_blank')">Learn More</button>
            </div>
        </div>
    `;
}
function showCertification() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="certification">
            
            
            <div class="project-item">
                <img src="c1.png" alt="Project 1">
                
            </div>
            <div class="project-item">
                <img src="c2.png" alt="Project 2">
                
            </div>
            <div class="project-item">
                <img src="c3.png" alt="Project 3">
                
            </div>

        </div>
    `;
}


function showContacts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="contacts">
            <h2>Contact me @: </h2>
            <ul>
                <li>
                    <a href="https://www.instagram.com/al.louisse/" target="_blank">
                        <img src="co3.png" alt="Contact 1" class="contact-icon">
                        Al.louisse
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/inoferio.Gwapo" target="_blank">
                        <img src="co2.png" alt="Contact 2" class="contact-icon">
                        Almar Louisse Inoferio
                    </a>
                </li>
                <li>
                    <a href="tel:09498261802" target="_blank">
                        <img src="co1.png" alt="Contact 3" class="contact-icon">
                        0949 826 1802 (Smart)
                    </a>
                </li>
            </ul>
        </div>
    `;
}