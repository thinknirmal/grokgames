<script lang="ts" setup>
import CommonBodyFooter from "@/components/CommonBodyFooter.vue";
import CommonNavbar from "@/components/CommonNavBar.vue";
import { ref, provide } from 'vue';

// Create a ref to store the current category name
const currentCategoryName = ref('All Games');

// Handle category change from the navbar
const handleCategoryChange = (categoryName: string) => {
    currentCategoryName.value = categoryName;
};

// Provide the category name to descendant components
provide('currentCategoryName', currentCategoryName);
</script>

<template>
    <div class="flex grow">
        <!-- Header -->
        <header
            class="flex lg:hidden items-center fixed z-10 top-0 start-0 end-0 shrink-0 bg-[--tw-page-bg] h-[--tw-header-height]"
            id="header">
            <!-- Container -->
            <div class="container-fixed flex items-center justify-between flex-wrap gap-3">
                <a href="/metronic/tailwind/demo10/">
                    <img class="size-[34px]" src="/media/app/mini-logo-circle-success.svg" />
                </a>
                <span class="text-gray-900 text-lg font-medium text-inverse grow">
                    GrokGames
                </span>
                <button class="btn btn-icon btn-light btn-clear btn-sm -me-2" data-drawer-toggle="#sidebar">
                    <i class="ki-filled ki-menu">
                    </i>
                </button>
            </div>
            <!-- End of Container -->
        </header>
        <!-- End of Header -->
        <!-- Wrapper -->
        <div class="flex flex-col lg:flex-row grow pt-[--tw-header-height] lg:pt-0">
            <!-- Sidebar -->
            <CommonNavbar @category-changed="handleCategoryChange" />
            <!-- End of Sidebar -->
            <!-- Main -->
            <div
                class="flex flex-col grow lg:rounded-l-xl bg-[--tw-content-bg] dark:bg-[--tw-content-bg] border border-gray-300 dark:border-gray-200 lg:ms-[--tw-sidebar-width]">
                <div class="flex flex-col grow lg:scrollable-y-auto lg:[scrollbar-width:auto] lg:light:[--tw-scrollbar-thumb-color:var(--tw-content-scrollbar-color)] pt-5"
                    id="scrollable_content">
                    <main class="grow" role="content">
                        <router-view />
                    </main>
                </div>
            </div>
            <!-- End of Main -->
        </div>
        <!-- End of Wrapper -->
    </div>
</template>