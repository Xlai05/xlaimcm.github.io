function showProfile() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="profile">
            <p style="border: 2.5px solid #000; padding: 10px;">
                <strong style="font-family: 'Brush Script MT', cursive; font-size: 24px;">Hi! I'm Almar Louisse T. Inoferio</strong><br><br>
                <span style="font-family: Verdana, sans-serif;">
                    I'm a second year college student in Bachelor of Science in Computer Science at Mapua Malayan Colleges of Mindanao. I am 20 years old and slightly happy but I'm still persevering in order to be better. I'm a pure Filipino blood and proud, that is probably why I love supporting locals. My interests are listening to music, watching reality shows, scrolling through social media, playing games, and coding.
                </span>
            </p>
            <img src="images/asdasda.png" alt="Profile Image" />
        </div>
    `;
}
function showProjects() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="projects">
            <div class="project-item">
                <img src="images/project1.png" alt="Project 1" style="max-width: 78%; max-height: 70%;">
                <button onclick="window.open('https://github.com/SavvSean/RentalContracts', '_blank')">Learn More</button>
            </div>
            <div class="project-item">
                <img src="images/project2.png" alt="Project 2">
                <button onclick="window.open('https://github.com/Xlai05/RestaurantReview', '_blank')">Learn More</button>
            </div>
            <div class="project-item">
                <img src="images/project3.png" alt="Project 3">
                <button onclick="window.open('images/HI.pdf', '_blank')">Learn More</button>
            </div>
            <div class="project-item">
                <img src="images/tubiglami.png" alt="Project 4">
                <button onclick="window.open('https://github.com/Xlai05/bsmcm.github.io', '_blank')">Learn More</button>
            <div>    
        </div>
    `;
}
function showCertification() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="certification">
            
            
            <div class="project-item">
                <img src="images/c1.png" alt="Project 1">
                
            </div>
            <div class="project-item">
                <img src="images/c2.png" alt="Project 2">
                
            </div>
            <div class="project-item">
                <img src="images/c3.png" alt="Project 3">
                
            </div>

        </div>
    `;
}


function showContacts() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="contacts" style="font-family: Verdana, sans-serif;">
            <h2>Contact me @: </h2>
            <ul style="border: 2px solid #000; padding: 10px;">
                <li>
                    <a href="https://www.instagram.com/al.louisse/" target="_blank">
                        <img src="images/co3.png" alt="Contact 1" class="contact-icon">
                        Al.louisse
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/inoferio.Gwapo" target="_blank">
                        <img src="images/co2.png" alt="Contact 2" class="contact-icon">
                        Almar Louisse Inoferio
                    </a>
                </li>
                <li>
                    <a href="tel:09498261802" target="_blank">
                        <img src="images/co1.png" alt="Contact 3" class="contact-icon">
                        0949 826 1802 (Smart)
                    </a>
                </li>
            </ul>
        </div>
    `;
}