<script setup lang="ts">
import Header from './components/Header.vue';
import GamesSection from './components/GamesSection.vue';
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <GamesSection />
    </main>
  </div>
</template>

<style>
/* Import font awesome for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #11192a;
  background: linear-gradient(to bottom, #121212, #1a1a1a, #000000);
  color: white;
  padding: 1rem;
}

main {
  flex: 1;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.drops-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.search-section {
  display: flex;
  align-items: center;
  margin: 2rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 1rem;
}

.inventory-icon {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  margin-right: 1rem;
}

.search-container {
  display: flex;
  flex: 1;
  gap: 1rem;
  align-items: center;
}

.search-container input,
.search-container select {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  color: white;
}

.price-filter {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.price-values {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  color: #aaa;
  font-size: 0.8rem;
}

.balance-indicator {
  display: flex;
  align-items: center;
  color: #4caf50;
}

.balance-indicator::before {
  content: "✓";
  margin-right: 0.5rem;
}

.clear-btn {
  background-color: transparent;
  border: none;
  color: #aaa;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.clear-btn::before {
  content: "×";
  margin-right: 0.5rem;
}
</style>
