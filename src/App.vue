<template>
  <div id="app">
    <nav class="navbar is-link" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
        <a class="navbar-item" href="https://github.com/wxinnovation/teams-blast-messenger"
        target="blank">
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
        <span>GitHub</span>
        </a>
        <!-- <router-link to="/about">GitHub</router-link> -->
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
@import './App.css';
</style>
