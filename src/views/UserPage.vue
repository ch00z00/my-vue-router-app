<template>
  <div class="user_wrapper">
    <h1>User Page</h1>
    <p>User ID: {{$route.params.id}}</p>
  </div>
</template>

<script setup></script>

<style>
.user_wrapper {
  text-align: center;
}
</style>
