<template>
  <!-- 
  <h1>Hello, Vue!</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <header></header>
  -->
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <p>&copy; 2026 WanDev. All rights reserved.</p>
  </footer>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods: {
    showAlert() {
      alert('Button clicked!');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
