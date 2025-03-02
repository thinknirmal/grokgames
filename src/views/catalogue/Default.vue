<script lang="ts" setup>
import ToolBar from "./components/ToolBar.vue";
import { useRoute, useRouter } from 'vue-router';
import { computed, inject } from 'vue';

const route = useRoute();
const router = useRouter();

// Inject the current category name from the parent component
const currentCategoryName = inject('currentCategoryName', 'All Games');

const currentCategoryId = computed(() => route.params.categoryId as string | undefined);

const handleCategorySelect = (categoryId: string) => {
    router.push({
        name: 'Catalogue',
        params: { categoryId }
    });
};
</script>

<template>
    <ToolBar :category-name="currentCategoryName" />
    <div class="container-fluid">
        <div class="md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-5">
        </div>
    </div>
</template>