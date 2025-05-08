

const getBackgroundClass = (background) => {
    if (!background) return "bg-default";
  
    switch (background.toLowerCase()) {
      case "clear sky":
        return "bg-clear";
      case "rain":
        return "bg-rain";
      case "snow":
        return "bg-snow";
      case "clouds":
        return "bg-clouds";
      case "thunderstorm":
        return "bg-thunder";
      default:
        return "bg-default";
    }
  };
  
  export default getBackgroundClass;
  