<template>
  <div id="app">
    <input type="text" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'vue-weather',
  data() {
    return {
      api_key: process.env.openWeatherMapAPIKey2VueWeather
    };
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
  display: flex;
  flex-direction: column;
}

#app > *:not(:last-child) {
  margin-bottom: 2rem;
}

input {
  display: block;
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  border: none;
  outline: none;
  background: none;
  border-radius: 8px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  background-color: #ffffff;
}
</style>
