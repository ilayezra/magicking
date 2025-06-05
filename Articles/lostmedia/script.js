document.addEventListener("DOMContentLoaded", function() {
  var shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", function() {
      var url = window.location.href;
      // העתקה ללוח
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function() {
          alert("הקישור למאמר הועתק! אפשר לשתף 😊");
        });
      } else {
        // תמיכה בדפדפנים ישנים
        var tempInput = document.createElement("input");
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert("הקישור למאמר הועתק! אפשר לשתף 😊");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var backBtn = document.querySelector('.back-btn');
  var backImg = document.getElementById('backImg');
  if (backBtn && backImg) {
    backBtn.addEventListener('mouseenter', function() {
      backImg.src = 'back_hover.png';
    });
    backBtn.addEventListener('mouseleave', function() {
      backImg.src = 'back.png';
    });
    backBtn.addEventListener('focus', function() {
      backImg.src = 'back_hover.png';
    });
    backBtn.addEventListener('blur', function() {
      backImg.src = 'back.png';
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const counterContainer = document.getElementById("view-count");
  if (counterContainer) {
    // מפתח ייחודי לכל עמוד לפי ה-URL
    const pageKey = 'views_' + window.location.pathname;
    let views = localStorage.getItem(pageKey) || 0;
    views++;
    localStorage.setItem(pageKey, views);
    counterContainer.textContent = views;
  }
});
  