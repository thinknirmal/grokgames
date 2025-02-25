<script setup lang="ts">
// Header component for Magic Drop
import { ref } from 'vue';
import SubmitGameModal from './SubmitGameModal.vue';

const isModalOpen = ref(false);

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="header-left">
      <div class="logo">
        <span class="logo-icon">
          <i class="fas fa-cube"></i>
        </span>
        <span class="logo-text">Grok<span class="gold-text">Games</span></span>
      </div>
    </div>
    <div class="header-right">
      <div class="steam-login" @click="toggleModal">
        <i class="fab fa-github"></i>
        <span>Submit your Game</span>
      </div>
    </div>
    <SubmitGameModal :isOpen="isModalOpen" @close="isModalOpen = false" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin-bottom: 1rem;
}

.header-left, .header-right {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin-right: 2rem;
}

.logo-icon {
  background: linear-gradient(135deg, #f5c518, #e6a700);
  color: #000;
  padding: 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem;
  display: inline-flex;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: #aaa;
  transition: all 0.2s;
}

.nav-item:hover, .nav-item.active {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.nav-item.active {
  border-bottom: 2px solid #f5c518;
}

.language-selector, .steam-login {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  margin-left: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.language-selector:hover, .steam-login:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.steam-login {
  background-color: rgba(0, 0, 0, 0.6);
}

.gold-text {
  color: #f5c518;
}

.flag {
  font-size: 1.2rem;
}
</style> 