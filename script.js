// Function to fetch data from the server and update the webpage
async function fetchData() {
  try {
    const response = await fetch("/");
    const data = await response.text();
    document.getElementById("data").innerHTML = data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the fetchData function initially
fetchData();

// Set interval to periodically update the data every 1 second
setInterval(fetchData, 1000);
