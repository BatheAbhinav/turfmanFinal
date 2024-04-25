document.addEventListener("DOMContentLoaded", function() {
    // Sample time slot data (replace with actual data)
    const timeSlotsData = [
      { day: "Monday", time: "10:00 AM - 12:00 PM", availability: "Available" },
      { day: "Tuesday", time: "2:00 PM - 4:00 PM", availability: "Booked" },
      { day: "Wednesday", time: "5:00 PM - 7:00 PM", availability: "Available" },
      // Add more time slot data as needed
    ];
  
    const timeSlotsTable = document.getElementById("timeSlots");
  
    // Add table headers
    const headers = ["Day", "Time Slot", "Availability"];
    const headerRow = timeSlotsTable.insertRow();
    headers.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
  
    // Add time slot data rows
    timeSlotsData.forEach(slot => {
      const row = timeSlotsTable.insertRow();
      Object.values(slot).forEach(value => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    });
  });
  