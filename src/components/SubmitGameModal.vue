<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  isOpen: boolean
}>();

const emit = defineEmits<{
  (e: 'close'): void
}>();

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click="handleClose">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h2>Submit Your Game</h2>
        <button class="close-button" @click="handleClose">×</button>
      </div>
      <div class="modal-content">
        <h3>🤖 AI-Created Games Only</h3>
        <p><strong>Important</strong>: GrokGames exclusively accepts games that were created with the assistance of AI language models. All games must be developed through prompting AI systems to generate code, assets, or game design.</p>
        
        <h3>🎮 How to Submit a Game</h3>
        <p>Contributing an AI-created game to GrokGames is simple! Follow these steps:</p>
        
        <h4>Step 1: Fork the Repository</h4>
        <p>Fork the GrokGames repository to your GitHub account and clone it locally.</p>
        
        <h4>Step 2: Create Your Game Directory</h4>
        <p>Create a new directory inside <code>public/games/</code> with your game's unique identifier (use kebab-case).</p>
        
        <h4>Step 3: Add Required Files</h4>
        <p>Each game <strong>must</strong> include:</p>
        <ul>
          <li><code>index.html</code> - Game entry point</li>
          <li><code>gg.json</code> - Game metadata (title, description, AI models used, etc.)</li>
          <li>Cover image (recommended 800×450px, JPG or PNG)</li>
        </ul>
        
        <h4>Step 4: Create Your Game Using AI</h4>
        <p>Develop your game using HTML, CSS, and JavaScript with the assistance of AI language models. Document which AI models were used and how they contributed.</p>
        
        <h4>Step 5: Submit a Pull Request</h4>
        <p>Create a pull request to the main repository with documentation of AI involvement.</p>
        
        <div class="button-container">
          <a href="https://github.com/thinknirmal/grokgames" target="_blank" class="github-button">
            <i class="fab fa-github"></i> Go to GitHub Repository
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background: #1a1a1a;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid #333;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #333;
}

.modal-header h2 {
  margin: 0;
  color: #f5c518;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
}

.close-button:hover {
  color: white;
}

.modal-content {
  padding: 1.5rem;
}

h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #f5c518;
}

h4 {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #ddd;
}

p {
  margin-bottom: 1rem;
  line-height: 1.5;
}

ul {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

code {
  background-color: #2a2a2a;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
}

.button-container {
  margin-top: 2rem;
  text-align: center;
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #f5c518, #e6a700);
  color: #000;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
}

.github-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(245, 197, 24, 0.3);
}
</style> 