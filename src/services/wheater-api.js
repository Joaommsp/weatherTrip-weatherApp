const key = "e715a4f7a2a8cc278c3f54f3cca9870b";

// Current weather data
export async function getWheather(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt_br&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// 5 day / 3 hour Forecast data
export async function getWheatherDays(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&lang=pt_br&units=metric`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

