<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
        }

        h1,
        h2 {
            color: #FF5722;
        }

        h1 {
            font-size: 36px;
            text-align: center;
        }

        p,
        li {
            font-size: 18px;
        }

        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border-radius: 5px;
            border: 1px solid #ddd;
        }

        .submit-btn {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 12px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
            background-color: #45a049;
        }

        .popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #4CAF50;
            color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            font-size: 16px;
            z-index: 9999;
        }
    </style>
</head>

<body>
    <section class="portfolio">
        <h1>My Portfolio Website 💻✨</h1>
        <p class="text-center text-lg text-gray-700">A personal portfolio website showcasing my skills, projects, and experiences. Built with <strong>Angular</strong> and styled using <strong>Tailwind CSS</strong>.</p>

        <hr>

        <h2 class="text-2xl">🚀 Tech Stack</h2>
        <ul>
            <li><strong>Frontend</strong>: <span class="text-blue-600">Angular</span></li>
            <li><strong>Styling</strong>: <span class="text-teal-600">Tailwind CSS</span></li>
            <li><strong>Build Tool</strong>: <span class="text-gray-600">Angular CLI</span></li>
            <li><strong>Responsive Design</strong>: Built with <span class="text-orange-600">mobile-first</span> and <span class="text-purple-600">responsive</span> design principles using Tailwind CSS</li>
        </ul>

        <h2 class="text-2xl">✨ Features</h2>
        <ul>
            <li>🖥️ Personal introduction, showcasing my skills and experiences</li>
            <li>📊 Detailed project sections to highlight my work</li>
            <li>📱 Fully responsive design that works on all screen sizes</li>
            <li>🖋️ Clean and modern UI, thanks to Tailwind CSS</li>
            <li>📞 Contact form section for getting in touch with me</li>
        </ul>

        <h2 class="text-2xl">🛠️ Prerequisites</h2>
        <p>Before running the application, ensure you have the following installed:</p>
        <ul>
            <li>🔧 <strong>Node.js</strong> and <strong>npm</strong></li>
            <li>🧑‍💻 <strong>Angular CLI</strong> (for managing the Angular project)</li>
            <li>💾 <strong>Git</strong> (optional, for cloning the project repository)</li>
        </ul>

        <h2 class="text-2xl">📥 Getting Started</h2>
        <h3>1. Clone the repository</h3>
        <pre>git clone https://github.com/yourusername/my-portfolio.git</pre>

        <h3>2. Install dependencies</h3>
        <pre>cd my-portfolio && npm install</pre>

        <h3>3. Run the development server</h3>
        <pre>ng serve</pre>
        <p>Visit <strong>http://localhost:4200</strong> in your browser.</p>

        <h2 class="text-2xl">💡 Folder Structure</h2>
        <pre>my-portfolio/
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
├── angular.json
├── package.json
└── tailwind.config.js</pre>

        <h2 class="text-2xl">🎨 Custom Styling with Tailwind CSS</h2>
        <p>The website design is mobile-first and fully responsive using Tailwind CSS.</p>

        <h2 class="text-2xl">🧑‍💻 Contributing</h2>
        <p>Feel free to fork this project and submit pull requests.</p>

        <h2 class="text-2xl">📄 License</h2>
        <p>MIT License - see the LICENSE file for details.</p>

        <!-- Contact Form -->
        <section class="contact-content">
            <h2 class="text-2xl text-center">Contact Me</h2>
            <form id="contact-form" class="contact-form" onsubmit="sendEmail(event)">
                <input type="text" id="name" name="name" placeholder="Name" required>
                <input type="email" id="email" name="email" placeholder="Email" required>
                <input type="text" id="subject" name="subject" placeholder="Subject">
                <textarea id="message" name="message" placeholder="Message" required></textarea>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
            <span id="msg"></span>
        </section>
    </section>

    <!-- EmailJS Initialization -->
    <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script>
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

        // Send email using EmailJS
        function sendEmail(event) {
            event.preventDefault();  // Prevent default form submission

            var form = document.getElementById('contact-form');
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var subject = document.getElementById('subject').value;
            var message = document.getElementById('message').value;

            // Using EmailJS to send the form data
            emailjs.sendForm('service_1ilwcxb', 'template_58qtj7i', form)
                .then(function(response) {
                    console.log('Success:', response);
                    // Show success popup
                    showPopup("Message sent successfully!");
                    // Reset form
                    form.reset();
                }, function(error) {
                    console.log('Error:', error);
                    // Show error message
                    document.getElementById('msg').textContent = "Oops! Something went wrong. Please try again.";
                });
        }

        // Function to show a success popup
        function showPopup(message) {
            var popup = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = message;
            document.body.appendChild(popup);
            setTimeout(function() {
                popup.style.display = 'none';
            }, 3000); // Hide popup after 3 seconds
        }
    </script>
</body>

</html>
