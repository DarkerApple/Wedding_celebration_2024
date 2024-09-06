// Countdown Timer for 7 PM Korean Time
function startCountdown() {
    const now = new Date();
    const target = new Date(); // Current date
    target.setHours(19, 0, 0, 0); // 7 PM Korean Time

    // Adjust for timezone offset (KST is UTC+9)
    const timezoneOffset = target.getTimezoneOffset() * 60000;
    const kstOffset = 9 * 60 * 60000; // KST offset
    const targetTime = target.getTime() - timezoneOffset + kstOffset;

    // Update every second
    setInterval(function() {
        const currentTime = new Date().getTime();
        const difference = targetTime - currentTime;

        if (difference >= 0) {
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
        } else {
            document.getElementById("countdownTimer").textContent = "Happy Anniversary! 🎉";
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    startCountdown(); // Start countdown when the DOM is ready

    // Guestbook functionality
    document.getElementById("guestbookForm").onsubmit = function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Get the guest's name and message
        const guestName = document.getElementById("guestName").value;
        const guestMessage = document.getElementById("guestMessage").value;

        // Create a new message entry
        const newMessageDiv = document.createElement("div");
        newMessageDiv.innerHTML = `<strong>${guestName}:</strong> ${guestMessage}`;

        // Append the message to the list
        document.getElementById("guestMessages").appendChild(newMessageDiv);

        // Clear the form
        document.getElementById("guestName").value = "";
        document.getElementById("guestMessage").value = "";
    };
});
