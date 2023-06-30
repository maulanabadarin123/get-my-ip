export async function fetchIpAddress() {
  
    // Set the required headers for the API request
    // const headers = {
    //   "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    //   "X-RapidAPI-Host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
    // };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://api.bigdatacloud.net/data/client-ip`,
    );
  
    // Parse the response as JSON
    const result = await response.json();
  
    return result;
  }