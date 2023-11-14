<script setup></script>

<template>
  <div class="container">
    <header>
      <h2>TODO List</h2>
    </header>
    <nav>
      <router-link to="/" class="link">목록</router-link>
      <router-link to="/statistics" class="link">통계</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  height: 600px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 30px;
  margin: 50px auto;
}
header {
  text-align: center;
}
nav {
  display: flex;
  margin: auto;
  justify-content: center;
  gap: 10px;
}
.link {
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 1.2rem;
  color: #ffffff;
  text-decoration: inherit;
}
.link:hover {
  background-color: rgba(82, 82, 89, 0.68);
  color: #10b981;
}
</style>
