// Define the start day of the week as Monday (0 is Sunday, 1 is Monday, etc.)
const startDayOfWeek = 1;

// Get the current date
const today = new Date();

// Calculate the start date of the current week based on the start day of the week
const startDate = new Date(today);
startDate.setDate(startDate.getDate() - (startDate.getDay() - startDayOfWeek + 7) % 7);

// Calculate the end date of the current week
const endDate = new Date(startDate);
endDate.setDate(endDate.getDate() + 6);

// Check if the current week is over
const now = new Date();
const isCurrentWeekOver = now > endDate;

// If the current week is over, move to the next week
if (isCurrentWeekOver) {
  startDate.setDate(startDate.getDate() + 7);
}

// Create an array to store the dates for each day of the week
const dates = [];
const dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
for (let i = 0; i < 7; i++) {
  const date = new Date(startDate);
  date.setDate(date.getDate() + i);
  dates.push(date.toLocaleDateString('en-US', dateOptions));
}

// Create an array to store the weekdays
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Create an array to store the availability of the sport field for each day of the week
const availability = Array(7).fill('unavailable');

// Create the table rows and append them to the table body
const tableBody = document.getElementById('table-body');
for (let i = 0; i < 7; i++) {
  const row = document.createElement('tr');

  const dateCell = document.createElement('td');
  dateCell.textContent = dates[i];
  row.appendChild(dateCell);

  const dayCell = document.createElement('td');
  dayCell.textContent = weekdays[i];
  row.appendChild(dayCell);

  const availabilityCell = document.createElement('td');
  availabilityCell.setAttribute('id', `availability-${i}`);
  availabilityCell.textContent = availability[i];
  row.appendChild(availabilityCell);

  tableBody.appendChild(row);
}

const table = document.getElementsByTagName("table")[0];
table.style.display = ""; // Show the table

function updateAvailability(dayOfWeek) {
  availability[dayOfWeek] = 'available';
  tableBody.children[dayOfWeek].children[2].textContent = availability[dayOfWeek];
}

updateAvailability(1); // Sport field is available on Monday.