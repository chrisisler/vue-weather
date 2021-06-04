<template>
  <div
    id="app"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 55
        ? 'hot-bg'
        : ''
    "
  >
    <main class="columns">
      <input
        type="text"
        placeholder="Search places..."
        v-model="query"
        v-on:keyup.enter="fetchWeather"
      />
      <div class="columns" v-if="typeof weather.main != 'undefined'">
        <div class="weather-results location">{{ weather.name }}, {{ weather.sys.country }}</div>
        <div class="weather-results date">{{ computeDate() }}</div>
        <div class="weather-results temperature">{{ Math.round(weather.main.temp) }}°F</div>
        <div class="weather-results description">{{ weather.weather[0].main }}</div>
      </div>
    </main>
  </div>
</template>

<script>
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
export default {
  name: 'vue-weather',
  data() {
    return {
      urlBase: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {}
    };
  },
  methods: {
    async fetchWeather() {
      const url = `${this.urlBase}weather?q=${this.query}&units=imperial&appid=${process.env.VUE_APP_OPENWEATHERMAP_API_KEY}`;
      try {
        const response = await fetch(url);
        const json = await response.json();
        this.weather = json;
      } catch (error) {
        this.$toasted.error(error.message);
      }
    },
    computeDate() {
      const now = new Date();
      const dayName = days[now.getDay()];
      const monthName = months[now.getMonth()];
      return `${dayName} ${now.getDate()} ${monthName} ${now.getFullYear()}`;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.3s;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

#app.hot-bg {
  background-image: url('./assets/warm-bg.jpg');
}

.columns {
  display: flex;
  flex-direction: column;
}
.columns > *:not(:last-child) {
  margin-bottom: 1rem;
}

input {
  display: block;
  width: 100%;
  padding: 1rem 1.2rem;
  font-size: 1.2rem;
  border: none;
  outline: none;
  background: none;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
  background-color: #ddd;
}
input:focus {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
  background-color: #fff;
}

.weather-results {
  color: #fff;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
}

.weather-results.location {
  font-weight: 500;
}

.weather-results.date {
  font-style: italic;
  font-weight: 300;
}

.weather-results.temperature {
  font-weight: 800;
  font-size: 6rem;
  border-radius: 20px;
  padding: 0;
  box-shadow: 4px 8px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.5);
}

.weather-results.description {
  font-style: italic;
  font-weight: 500;
}
</style>
