console.log("testing");

const proxyUrl = "http://localhost:3001/api"; // Assuming proxy server is running on this URL
const baseUrl = "https://restcountries.com/v3.1";

const fetchUrl = async () => {
  try {
    const response = await fetch(`${baseUrl}/name/aruba?fullText=true`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

fetchUrl();
