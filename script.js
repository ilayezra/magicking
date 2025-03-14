window.addEventListener('load', () => {
    const versionSpan = document.getElementById('ruffleVersion');
    
    fetch('https://api.github.com/repos/ruffle-rs/ruffle/tags')
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const latestTag = data[0].name;
                const dateMatch = latestTag.match(/nightly-(\d{4}-\d{2}-\d{2})/);
                
                if (dateMatch) {
                    versionSpan.textContent = `Nightly ${dateMatch[1]}`;
                } else {
                    versionSpan.textContent = `Latest: ${latestTag}`;
                }
            } else {
                versionSpan.textContent = "שגיאה בעת השגת גרסה";
            }
        })
        .catch(error => {
            console.error('שגיאה בעת השגת גרסה', error);
            versionSpan.textContent = "שגיאה בעת השגת גרסה";
        });
        
    // Check for stored integrity date
    updateIntegrityStatus();
});

function updateIntegrityStatus() {
    const storedDate = localStorage.getItem('gameIntegrityDate');
    const storedStatus = localStorage.getItem('gameIntegrityStatus');
    
    if (storedDate) {
        // Find the element that displays the date and update it
        const dateElement = document.querySelector('.uptext p');
        if (dateElement) {
            const updatedText = dateElement.innerHTML.replace(
                /לאחר בדיקה ידנית שנערכה בתאריך ה([0-9-]+)/,
                `לאחר בדיקה ידנית שנערכה בתאריך ה${storedDate}`
            );
            dateElement.innerHTML = updatedText;
        }
        
        // Update the status (שחיק or אינו שחיק)
        if (storedStatus) {
            const statusElement = document.querySelector('.uptext .colortext');
            if (statusElement) {
                statusElement.textContent = storedStatus;
                statusElement.style.color = storedStatus === 'שחיק' ? 'green' : 'red';
            }
        }
    }
}

function FSfunction() {
    document.querySelector("ruffle-embed, ruffle-object, ruffle-player").enterFullscreen();
}

document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const closeSplashButton = document.getElementById('closeSplash');
  
    closeSplashButton.addEventListener('click', function() {
      splashScreen.classList.add('hidden');
      
      // Remove the splash screen from the DOM after the transition
      setTimeout(() => {
        splashScreen.remove();
      }, 500); // This should match the transition duration in the CSS
    });
});