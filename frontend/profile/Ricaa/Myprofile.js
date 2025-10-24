function navigateTo(page) {
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    alert('Navigating to ' + page.charAt(0).toUpperCase() + page.slice(1) + ' page');
}
function showSection(section) {
    var items = document.querySelectorAll('.sidebar-item');
    items.forEach(function(item) {
        item.classList.remove('active');
    });
    event.target.closest('.sidebar-item').classList.add('active');
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(s) {
        s.style.display = 'none';
    });
    var targetSection = document.getElementById(section + '-section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}
function openSocial(platform) {
    var urls = {
        'facebook': 'https://facebook.com',
        'twitter': 'https://twitter.com',
        'linkedin': 'https://linkedin.com'
    };
    alert('Opening ' + platform.charAt(0).toUpperCase() + platform.slice(1) + '...');
}
function openSupport(type) {
    var sections = {
        'help': 'Help Center',
        'student': 'Student Portal',
        'privacy': 'Privacy Policy',
        'terms': 'Terms of Service'
    };
    alert('Opening ' + sections[type] + '...');
}
function subscribe() {
    var email = document.getElementById('newsletter-email').value;
    if (email && email.includes('@')) {
        alert('Thank you for subscribing with ' + email + '! You will receive our latest updates.');
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}
function downloadCertificate(courseCode) {
    var certificateContent = `
CERTIFICATE OF COMPLETION
This certifies that
BURNOK
has successfully completed the course
${courseCode}
with distinction
Date: ${new Date().toLocaleDateString()}
EDU ENROLL
    `;
    var blob = new Blob([certificateContent], { type: 'text/plain' });
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Certificate_' + courseCode.replace(' ', '_') + '.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
function editProfile() {
    alert('Opening profile editor... You can update your information here.');
}
function changePassword() {
    var currentPassword = prompt('Enter your current password:');
    if (currentPassword) {
        var newPassword = prompt('Enter your new password:');
        if (newPassword) {
            var confirmPassword = prompt('Confirm your new password:');
            if (confirmPassword === newPassword) {
                alert('Password successfully changed! You will need to log in again with your new password.');
            } else {
                alert('Passwords do not match. Please try again.');
            }
        }
    }
}
function toggleTwoFactor() {
    var toggle = document.getElementById('two-factor-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Two-Factor Authentication has been enabled. You will receive a verification code via email on your next login.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Two-Factor Authentication has been disabled.');
    }
}
function toggleLoginNotifications() {
    var toggle = document.getElementById('login-notif-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Login notifications enabled. You will receive an email whenever someone logs into your account.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Login notifications disabled.');
    }
}
function toggleCourseUpdates() {
    var toggle = document.getElementById('course-updates-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Course updates notifications enabled. You will be notified about course announcements.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Course updates notifications disabled.');
    }
}
function toggleAssignmentReminders() {
    var toggle = document.getElementById('assignment-reminders-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Assignment reminders enabled. You will receive reminders before assignment deadlines.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Assignment reminders disabled.');
    }
}
function toggleGradeNotifications() {
    var toggle = document.getElementById('grade-notif-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Grade notifications enabled. You will be notified when new grades are posted.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Grade notifications disabled.');
    }
}
function toggleProfileVisibility() {
    var toggle = document.getElementById('profile-visibility-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Profile is now visible. Other students can view your profile information.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Profile is now private. Only you and instructors can view your profile.');
    }
}
function toggleProgressSharing() {
    var toggle = document.getElementById('progress-sharing-toggle');
    var slider = toggle.nextElementSibling;
    var thumb = slider.nextElementSibling;
    if (toggle.checked) {
        slider.style.backgroundColor = '#0066ff';
        thumb.style.transform = 'translateX(24px)';
        alert('Course progress sharing enabled. Your instructors can now see your course progress.');
    } else {
        slider.style.backgroundColor = '#ccc';
        thumb.style.transform = 'translateX(0)';
        alert('Course progress sharing disabled. Your course progress is now private.');
    }
}
function deleteAccount() {
    var confirmation1 = confirm('⚠️ WARNING: Are you absolutely sure you want to delete your account?\n\nThis will permanently delete:\n- All your course enrollments\n- Your academic records\n- Your certificates\n- Your personal information\n\nThis action CANNOT be undone!');
    if (confirmation1) {
        var typeDelete = prompt('To confirm deletion, please type "DELETE" in capital letters:');
        if (typeDelete === 'DELETE') {
            var finalConfirm = confirm('This is your FINAL warning. Once you click OK, your account will be permanently deleted. There is no way to recover it.\n\nAre you 100% certain?');
            if (finalConfirm) {
                alert('Account deletion initiated.\n\nYour account and all associated data have been scheduled for permanent deletion.\n\nYou will receive a confirmation email at Burnok@gmail.com within 24 hours.\n\nThank you for using EDU ENROLL.');
            } else {
                alert('Account deletion cancelled. Your account is safe.');
            }
        } else {
            alert('Deletion cancelled. You must type "DELETE" exactly to confirm.');
        }
    } else {
        alert('Account deletion cancelled. Your account remains active.');
    }
}
window.onload = function() {
    var educationSection = document.getElementById('education-section');
    if (educationSection) {
        educationSection.style.display = 'block';
    }
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
};