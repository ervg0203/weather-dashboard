# Weather Dashboard

## 🌤️ Overview
This is a React-based Weather Dashboard that allows users to search for any city and view real-time weather information fetched from the OpenWeatherMap API. The app provides essential weather details such as temperature, humidity, wind speed, and weather conditions with icons.

## 🚀 Live Demo
[Weather Dashboard Live](https://ervg0203.github.io/weather-dashboard/)

## 🛠 Tech Stack
- **Framework:** React.js (CRA)
- **State Management:** React Hooks
- **Styling:** Component Styling 
- **API:** OpenWeatherMap API
- **Deployment:** GitHub Pages

## 🔧 Features
- 🌍 **City Search**: Users can search for any city to get its weather details.
- ⏳ **Loading State**: Displays a loader while fetching data.
- ❌ **Error Handling**: Shows an error message for invalid cities or API failures.
- 📊 **Weather Details**:
  - City Name
  - Temperature (°C)
  - Weather Condition (Sunny, Rainy, etc.)
  - Humidity (%)
  - Wind Speed (km/h)
  - Weather Icon
- 🌙 **Dark/Light Theme Toggle** 
- 🕘 **Recent Search History**
- 5-days Weather Forecast

## 📦 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your OpenWeatherMap API key:
   ```env
   REACT_APP_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔌 API Integration
- API Used: **OpenWeatherMap Current Weather API**
- API Endpoint:
  ```
  https://api.openweathermap.org/data/2.5/weather?q={city}&appid={YOUR_API_KEY}&units=metric
  ```
- **Rate Limits**: Free-tier API keys have request limits; check OpenWeatherMap’s official documentation.
- **Error Handling**: Displays user-friendly messages for invalid city names or API failures.

## 🚀 Deployment
The app is deployed on GitHub Pages.
- To deploy:
  ```bash
  npm run build
  ```
  Then, push to the `gh-pages` branch or configure GitHub Pages in repo settings.

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/22b0dd88-22dd-48f4-8b14-b641f81a647f)
![image](https://github.com/user-attachments/assets/f44e72f2-218e-4c40-875c-35a504a5d19b)
![image](https://github.com/user-attachments/assets/40cdf51d-a626-48b0-bdea-8c26ecc302f6)
![image](https://github.com/user-attachments/assets/cbb16956-9768-4866-b05d-d5d7872e12ab)
![image](https://github.com/user-attachments/assets/e3a4440e-942d-48c1-929b-8c87327475f1)
![image](https://github.com/user-attachments/assets/d5ddd310-a380-4480-8fd7-28c82ef52a04)

## ✨ Future Enhancements
- Geolocation-based weather lookup
- Improved UI animations using Framer Motion

## 📬 Contact
For any queries, reach out at [vaibhavgupta2980702@gmail.com](mailto:vaibhavgupta2980702@gmail.com) or visit my [GitHub](https://github.com/ervg0203).

---
