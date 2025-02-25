<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AIModelFilter from './AIModelFilter.vue';

interface AIModel {
  name: string;
  role: 'primary' | 'secondary';
  contribution: string;
}

interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  isNew: boolean;
  isHot: boolean;
  imageUrl: string;
  releaseDate: string;
  tags: string[];
  aiModels?: AIModel[];
}

const games = ref<Game[]>([]);
const allGames = ref<Game[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const imageErrors = ref<Record<string, boolean>>({});
const selectedAIModels = ref<string[]>([]);

// List of game quotes
const quotes = [
  "Legends don't respawn—they reload.",
  "My sword's sharp, but my wit's sharper.",
  "Out of lives? Guess you're my ghost now.",
  "Victory's just a headshot away.",
  "I'd rage quit, but I'm too good for that.",
  "The loot's mine; you're just borrowing the dirt.",
  "Dance on their graves—it's the final combo.",
  "No save point can stop this chaos.",
  "I'm the glitch your nightmares warned you about.",
  "One more boss, then I'll sleep… maybe.",
  "Your shield's cute—mine's a fortress.",
  "I don't camp; I tactically dominate.",
  "Pixel by pixel, I'll ruin your day.",
  "The leaderboard's my autobiography.",
  "You brought a knife to a dragon fight?"
];

// Get a random quote from the list
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Function to get model class for styling
const getAIModelClass = (modelName: string): string => {
  const normalizedName = modelName.toLowerCase();
  
  if (normalizedName.includes('gpt-4')) return 'ai-model-gpt4';
  if (normalizedName.includes('gpt-3.5') || normalizedName.includes('gpt3.5')) return 'ai-model-gpt35';
  if (normalizedName.includes('claude')) return 'ai-model-claude';
  if (normalizedName.includes('gemini')) return 'ai-model-gemini';
  if (normalizedName.includes('llama')) return 'ai-model-llama';
  if (normalizedName.includes('mixtral')) return 'ai-model-mixtral';
  
  return 'ai-model-other';
};

// Function to get model ID for filtering
const getAIModelId = (modelName: string): string => {
  const normalizedName = modelName.toLowerCase();
  
  if (normalizedName.includes('gpt-4')) return 'gpt4';
  if (normalizedName.includes('gpt-3.5') || normalizedName.includes('gpt3.5')) return 'gpt35';
  if (normalizedName.includes('claude')) return 'claude';
  if (normalizedName.includes('gemini')) return 'gemini';
  if (normalizedName.includes('llama')) return 'llama';
  if (normalizedName.includes('mixtral')) return 'mixtral';
  if (normalizedName.includes('dall-e') || normalizedName.includes('dalle')) return 'dalle';
  if (normalizedName.includes('midjourney')) return 'midjourney';
  
  return 'other';
};

// Function to open a game
const openGame = (gameId: string) => {
  const gamePath = `/games/${gameId}/index.html`;
  console.log(`Opening game: ${gamePath}`);
  // Open in a new tab/window with specific features
  window.open(gamePath, '_blank', 'noopener,noreferrer');
};

// Function to handle image loading errors
const handleImageError = (gameId: string) => {
  imageErrors.value[gameId] = true;
};

// Filter games by selected AI models
const filteredGames = computed(() => {
  if (selectedAIModels.value.length === 0) {
    return allGames.value;
  }
  
  return allGames.value.filter(game => {
    if (!game.aiModels || game.aiModels.length === 0) return false;
    
    // Check if any of the game's AI models match the selected filters
    return game.aiModels.some(model => {
      const modelId = getAIModelId(model.name);
      return selectedAIModels.value.includes(modelId);
    });
  });
});

// Update games list when filters change
const updateSelectedModels = (models: string[]) => {
  selectedAIModels.value = models;
  games.value = filteredGames.value;
};

const loadGames = async () => {
  try {
    loading.value = true;
    
    // Fetch the list of game directories from the static JSON file
    const response = await fetch('/games-list.json');
    
    if (!response.ok) {
      throw new Error(`Error loading games list: ${response.statusText}`);
    }
    
    const gamesList = await response.json();
    const loadedGames: Game[] = [];
    
    // Load each game's metadata from its gg.json file
    for (const gameId of gamesList) {
      const metadataResponse = await fetch(`/games/${gameId}/gg.json`);
      if (metadataResponse.ok) {
        const gameData = await metadataResponse.json();
        loadedGames.push(gameData);
      } else {
        console.warn(`Failed to load metadata for game ${gameId}: ${metadataResponse.statusText}`);
      }
    }
    
    allGames.value = loadedGames;
    games.value = loadedGames;
    console.log(`Loaded ${loadedGames.length} games:`, loadedGames.map(game => game.id));
  } catch (err) {
    console.error('Failed to load games:', err);
    error.value = err instanceof Error ? err.message : 'Unknown error loading games';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadGames();
});
</script>

<template>
  <div class="games-section">
    <h2 class="section-title">{{ randomQuote }}</h2>
    <p class="section-description">
      Ready, Set, Play: AI’s Minigame Collection Drops Now!
    </p>
    
    <AIModelFilter @update:selectedModels="updateSelectedModels" />
    
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading games...</p>
    </div>
    
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
      <button @click="loadGames" class="retry-button">Retry</button>
    </div>
    
    <div v-else-if="games.length === 0" class="no-games-message">
      <i class="fas fa-robot fa-3x"></i>
      <p>No games found matching your selected AI model filters.</p>
    </div>
    
    <div v-else class="games-grid">
      <div 
        v-for="game in games" 
        :key="game.id" 
        class="game-card"
        @click="openGame(game.id)"
      >
        <h3 class="game-title">{{ game.title }}</h3>
        <div class="game-image">
          <div 
            class="game-cover" 
            :class="{ 'has-error': imageErrors[game.id] }"
          >
            <!-- Actual game cover image -->
            <img 
              v-if="game.imageUrl" 
              :src="game.imageUrl" 
              :alt="`${game.title} cover`" 
              class="cover-img"
              @error="handleImageError(game.id)"
            />
            <!-- Fallback icon for when image fails to load -->
            <i v-if="!game.imageUrl || imageErrors[game.id]" class="fas fa-gamepad fa-3x fallback-icon"></i>
          </div>
        </div>
        <p class="game-description">{{ game.description }}</p>
        
        <div class="game-ai-models" v-if="game.aiModels && game.aiModels.length > 0">
          <div class="ai-models-label">Created with:</div>
          <div class="ai-models-list">
            <span 
              v-for="(model, index) in game.aiModels" 
              :key="index" 
              class="ai-model-chip"
              :class="getAIModelClass(model.name)"
              :title="model.contribution"
            >
              {{ model.name }}
            </span>
          </div>
        </div>
        
        <div class="play-button">
          <i class="fas fa-play-circle"></i> Play Game
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.games-section {
  margin: 2rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 4rem;
  font-weight: 900;
  color: #f5c518;
}

.section-description {
  text-align: center;
  font-size: 1.5rem;
  color: #ccc;
  max-width: 800px;
  margin: 0 auto 2rem;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.game-card {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.ai-model-gpt4 {
  background-color: #10a37f;
  color: white;
}

.ai-model-gpt35 {
  background-color: #19c37d;
  color: white;
}

.ai-model-claude {
  background-color: #8e44ad;
  color: white;
}

.ai-model-gemini {
  background-color: #4285f4;
  color: white;
}

.ai-model-llama {
  background-color: #ef4a23;
  color: white;
}

.ai-model-mixtral {
  background-color: #6236ff;
  color: white;
}

.ai-model-other {
  background-color: #555;
  color: white;
}

.game-title {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}

.game-description {
  font-size: 0.9rem;
  color: #ccc;
  flex-grow: 1;
}

.game-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.game-cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.game-card:hover .cover-img {
  transform: scale(1.05);
}

.has-error {
  background-color: rgba(0, 0, 0, 0.5);
}

.fallback-icon {
  color: #f5c518;
  font-size: 3rem;
}

.game-ai-models {
  margin-top: 0.5rem;
}

.ai-models-label {
  font-size: 0.8rem;
  color: #aaa;
  margin-bottom: 0.3rem;
}

.ai-models-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.ai-model-chip {
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  white-space: nowrap;
}

.play-button {
  background-color: #f5c518;
  color: #000;
  text-align: center;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 700;
  margin-top: 0.5rem;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.play-button:hover {
  background-color: #e6b800;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid rgba(245, 197, 24, 0.1);
  border-top-color: #f5c518;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  text-align: center;
  color: #e74c3c;
  padding: 2rem;
}

.no-games-message {
  text-align: center;
  color: #ccc;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.retry-button {
  background-color: #f5c518;
  color: #000;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
}

.retry-button:hover {
  background-color: #e6b800;
}
</style> 