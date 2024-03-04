export const getLocationCoordinates = async (address, apiKey) => {
    console.log('address:-',address);
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
    
    if (data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { latitude: location.lat, longitude: location.lng };
    } else {
      throw new Error('Location not found');
    }
  };
