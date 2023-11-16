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
  justify-content: center;
  gap: 10px;
}
.router-link-exact-active {
  color: #ffffff;
  background-color: #262626;
  border: 2px solid #6366f1;
}
.link {
  padding: 10px 30px;
  font-weight: 600;
  text-decoration: none;
  background-color: #1c1c1e;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}
.link:not(.router-link-exact-active) {
  color: #595959;
}
.link:not(.router-link-exact-active):hover {
  background-color: #262626;
  color: #a2a2a2;
}
</style>
