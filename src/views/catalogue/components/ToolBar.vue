<script lang="ts" setup>
// Define props to receive the category name
defineProps<{
    categoryName: string;
}>();
</script>
<template>
    <div class="pb-5">
        <!-- Container -->
        <div class="container-fluid flex items-center justify-between flex-wrap gap-3">
            <div class="flex flex-col flex-wrap gap-1">
                <h1 class="font-black text-2xl text-gray-900">
                    {{ categoryName }}
                </h1>
            </div>
        </div>
        <!-- End of Container -->
    </div>
</template>