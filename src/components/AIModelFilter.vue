<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';

const emit = defineEmits(['update:selectedModels']);

// Define common AI models
const availableModels = [
  { id: 'gpt4', name: 'GPT-4', color: '#10a37f' },
  { id: 'gpt35', name: 'GPT-3.5', color: '#19c37d' },
  { id: 'claude', name: 'Claude', color: '#8e44ad' },
  { id: 'gemini', name: 'Gemini', color: '#4285f4' },
  { id: 'llama', name: 'Llama', color: '#ef4a23' },
  { id: 'mixtral', name: 'Mixtral', color: '#6236ff' },
  { id: 'dalle', name: 'DALL-E', color: '#ff5656' },
  { id: 'midjourney', name: 'Midjourney', color: '#7289da' },
  { id: 'other', name: 'Other Models', color: '#555555' }
];

const selectedModels = ref<string[]>([]);

const toggleModel = (modelId: string) => {
  if (selectedModels.value.includes(modelId)) {
    selectedModels.value = selectedModels.value.filter(id => id !== modelId);
  } else {
    selectedModels.value.push(modelId);
  }
  emit('update:selectedModels', selectedModels.value);
};

const clearFilters = () => {
  selectedModels.value = [];
  emit('update:selectedModels', []);
};

const hasActiveFilters = computed(() => selectedModels.value.length > 0);
</script>

<template>
  <div class="ai-model-filter">
    <div class="filter-header">
      <h3>Filter by AI Model</h3>
      <button 
        v-if="hasActiveFilters" 
        @click="clearFilters" 
        class="clear-filters-btn"
      >
        Clear Filters
      </button>
    </div>
    
    <div class="model-chips">
      <div 
        v-for="model in availableModels" 
        :key="model.id"
        class="model-chip"
        :class="{ active: selectedModels.includes(model.id) }"
        :style="{ '--model-color': model.color }"
        @click="toggleModel(model.id)"
      >
        <i class="fas fa-robot"></i>
        {{ model.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.ai-model-filter {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.filter-header h3 {
  margin: 0;
  color: #f5c518;
  font-size: 1.2rem;
}

.clear-filters-btn {
  background: transparent;
  border: 1px solid #f5c518;
  color: #f5c518;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-filters-btn:hover {
  background-color: #f5c518;
  color: #000;
}

.model-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.model-chip {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.7rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.model-chip:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.model-chip.active {
  background-color: var(--model-color);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.model-chip i {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .model-chips {
    gap: 0.4rem;
  }
  
  .model-chip {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style> 