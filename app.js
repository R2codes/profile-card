document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toUTCString().split(' ')[4];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
});