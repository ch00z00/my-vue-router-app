<template>
  <h1>Root Router Page</h1>
  <router-link to="/">HomePage</router-link> |
  <router-link to="/about">AboutPage</router-link> |
  <router-link to="/user/:id">UserPage</router-link>
  <div class="router_view">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style scoped>
.router_view {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  background-color: #3FB883;
  margin-top: 30px;
}
</style>
