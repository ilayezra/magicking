// admin.js - Create this file in your project
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the admin page
    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
      adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('adminPassword').value;
        
        if (password === '898nfRS5DJ+cvaSyOjTL2w==') {
          const newDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
          
          // Store the new date in localStorage
          localStorage.setItem('gameIntegrityDate', newDate);
          localStorage.setItem('gameIntegrityStatus', document.getElementById('gameStatus').value);
          
          document.getElementById('updateStatus').textContent = 'עדכון בוצע בהצלחה! תאריך חדש: ' + newDate;
          document.getElementById('updateStatus').style.color = 'green';
        } else {
          document.getElementById('updateStatus').textContent = 'סיסמה שגויה!';
          document.getElementById('updateStatus').style.color = 'red';
        }
      });
    }
  });
