<script lang="ts" setup>
import ToolBar from "./components/ToolBar.vue";
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const router = useRouter();

const currentCategoryId = computed(() => route.params.categoryId as string | undefined);

const handleCategorySelect = (categoryId: string) => {
    router.push({
        name: 'Catalogue',
        params: { categoryId }
    });
};
</script>

<template>
    <ToolBar />
    <div class="container-fluid">
        <div class="md:grid lg:grid-cols-4 md:grid-cols-3 md:gap-5">
        </div>
    </div>
</template>