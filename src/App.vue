<script setup></script>

<template>
  <div id="app">
    <div class="container">
      <h1>TODO List</h1>
      <nav class="link-list">
        <router-link to="/" class="link">목록</router-link>
        <router-link to="/statistics" class="link">통계</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.link-list {
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
}
.link:hover {
  background-color: rgba(82, 82, 89, 0.68);
  color: #10b981;
}
</style>
