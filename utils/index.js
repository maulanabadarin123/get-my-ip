export async function fetchIpAddress() {
  
    // Set the required headers for the API request
    const headers = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }