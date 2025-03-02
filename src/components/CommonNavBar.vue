<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const emit = defineEmits(['categoryChanged']);

// Define types for the category data
interface CategoryData {
    name: string;
    icon: string;
}

// Map of category IDs to their display names and icons
const categoryMap = {
    'all-games': { name: 'All Games', icon: 'ki-home-3' },
    'action': { name: 'Action', icon: 'ki-rocket' },
    'adventure': { name: 'Adventure', icon: 'ki-compass' },
    'shooter': { name: 'Shooter', icon: 'ki-cd' },
    'platformer': { name: 'Platformer', icon: 'ki-abstract-26' },
    'role-playing': { name: 'Role-Playing (RPG)', icon: 'ki-crown' },
    'strategy': { name: 'Strategy', icon: 'ki-chart' },
    'tactics': { name: 'Tactics', icon: 'ki-element-11' },
    'puzzle': { name: 'Puzzle', icon: 'ki-chart-pie-simple' },
    'logic': { name: 'Logic', icon: 'ki-abstract-14' },
    'simulation': { name: 'Simulation', icon: 'ki-abstract-22' },
    'sports': { name: 'Sports', icon: 'ki-medal-star' },
    'casual': { name: 'Casual', icon: 'ki-abstract-41' },
    'social': { name: 'Social', icon: 'ki-people' },
    'rhythm': { name: 'Rhythm', icon: 'ki-abstract-30' },
    'music': { name: 'Music', icon: 'ki-abstract-45' },
    'horror': { name: 'Horror', icon: 'ki-mask' },
    'educational': { name: 'Educational', icon: 'ki-book-open' },
    'serious-games': { name: 'Serious Games', icon: 'ki-briefcase' },
    'fighting': { name: 'Fighting', icon: 'ki-shield-slash' },
    'card-games': { name: 'Card Games', icon: 'ki-note-2' },
    'board-games': { name: 'Board Games', icon: 'ki-element-equal' },
    'experimental-indie': { name: 'Experimental/Indie', icon: 'ki-abstract-32' }
} as const;

// Derive the CategoryId type from the keys of categoryMap
type CategoryId = keyof typeof categoryMap;

// Create an array of categories for iteration in the template
const categories = computed(() => {
    return Object.entries(categoryMap).map(([id, data]) => ({
        id,
        name: data.name,
        icon: data.icon
    }));
});

// Get the current category from the route
const currentCategory = computed(() => {
    const categoryId = (route.params.categoryId as string) || 'all-games';
    // Check if the category exists in our map, otherwise default to 'all-games'
    return Object.keys(categoryMap).includes(categoryId)
        ? categoryId as CategoryId
        : 'all-games' as CategoryId;
});

// Get the display name for the current category
const currentCategoryName = computed(() => {
    return categoryMap[currentCategory.value].name;
});

// Watch for changes in the category and emit the category name to parent
watch(currentCategoryName, (newCategoryName) => {
    emit('categoryChanged', newCategoryName);
});

// Emit the initial category name on mount
onMounted(() => {
    emit('categoryChanged', currentCategoryName.value);
});
</script>

<template>
    <div class="flex-col fixed top-0 bottom-0 z-20 hidden lg:flex items-stretch shrink-0 w-[--tw-sidebar-width] dark"
        data-drawer="true" data-drawer-class="drawer drawer-start flex top-0 bottom-0"
        data-drawer-enable="true|lg:false" id="sidebar">
        <!-- Sidebar Header -->
        <div class="flex flex-col gap-2.5" id="sidebar_header">
            <div class="flex items-center gap-2.5 px-3.5 h-[70px]">
                <a href="/metronic/tailwind/demo10/index.html">
                    <img class="size-[34px]" src="/media/app/mini-logo-circle-success.svg" />
                </a>
                <span class="text-gray-900 text-lg font-medium text-inverse grow">
                    GrokGames
                </span>
            </div>
            <div class="flex items-center gap-2.5 px-3.5">
                <!-- Input -->
                <a class="btn btn-dark btn-sm justify-center min-w-[198px]"
                    href="/metronic/tailwind/demo10/public-profile/projects/3-columns">
                    <i class="ki-filled ki-plus">
                    </i>
                    Publish Your Game
                </a>
                <!-- End of Input -->
                <button class="btn btn-icon btn-dark btn-icon-lg size-8 hover:text-primary"
                    data-modal-toggle="#search_modal">
                    <i class="ki-filled ki-magnifier">
                    </i>
                </button>
            </div>
        </div>
        <!-- End of Sidebar Header -->
        <!-- Sidebar menu -->
        <div class="flex flex-col grow overflow-hidden" id="sidebar_menu">
            <div
                class="scrollable-y-auto h-full max-h-[calc(100vh-150px)] overflow-y-auto [--tw-scrollbar-thumb-color:var(--tw-gray-300)] mt-5">
                <!-- Primary Menu -->
                <div class="mb-5">
                    <h3 class="text-sm text-gray-500 uppercase ps-5 inline-block mb-3">
                        Games
                    </h3>
                    <div class="menu flex flex-col w-full gap-1.5 px-3.5" data-menu="true"
                        data-menu-accordion-expand-all="false" id="sidebar_primary_menu">
                        <!-- Loop through categories -->
                        <div v-for="category in categories" :key="category.id" class="menu-item"
                            :class="{ 'active': currentCategory === category.id }">
                            <a class="menu-link gap-2.5 py-2 px-2.5 rounded-md menu-item-active:bg-gray-100 menu-link-hover:bg-gray-100 !menu-item-here:bg-transparent"
                                :href="`/catalogue/${category.id}`">
                                <span
                                    class="menu-icon items-start text-lg text-gray-600 menu-item-active:text-gray-900 menu-item-here:text-gray-900">
                                    <i :class="`ki-filled ${category.icon}`"></i>
                                </span>
                                <span
                                    class="menu-title text-sm text-gray-800 font-medium menu-item-here:text-gray-900 menu-item-active:text-gray-900 menu-link-hover:text-gray-900">
                                    {{ category.name }}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- End of Primary Menu -->
            </div>
        </div>
        <!-- End of Sidebar menu-->
    </div>
</template>