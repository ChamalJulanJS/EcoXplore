const fs = require('fs');
const path = require('path');

const files = ['index.html', 'about.html', 'tours.html', 'gallery.html', 'booking.html'];

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace('<a href="#" class="nav-auth-login">Log In</a>', '<a href="login.html" class="nav-auth-login">Log In</a>');
        content = content.replace('<a href="#" class="btn-modern btn-primary-modern text-white" style="padding: 10px 24px; font-size: 0.85rem;">Sign Up</a>', '<a href="signup.html" class="btn-modern btn-primary-modern text-white" style="padding: 10px 24px; font-size: 0.85rem;">Sign Up</a>');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Links updated');
