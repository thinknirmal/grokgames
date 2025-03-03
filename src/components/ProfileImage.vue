<script lang="ts" setup>
import { computed } from 'vue';
import { useProfileImage } from '../composables/useProfileImage';

const props = defineProps<{
    photoURL: string | null;
    size?: 'sm' | 'md' | 'lg';
    alt?: string;
}>();

// Default values
const alt = props.alt || 'Profile';
const sizeClass = computed(() => {
    switch (props.size) {
        case 'sm': return 'size-8';
        case 'lg': return 'size-12';
        default: return 'size-10'; // medium is default
    }
});

// Profile image handling
const { imageLoading, imageError, getProfileImageUrl, handleImageError, handleImageLoad } = useProfileImage();

// Computed property for profile image URL
const profileImageUrl = computed(() => {
    return props.photoURL ? getProfileImageUrl(props.photoURL) : null;
});
</script>

<template>
    <div :class="[sizeClass, 'rounded-full bg-gray-200 flex items-center justify-center overflow-hidden']">
        <!-- Profile image when available and not errored -->
        <img v-if="profileImageUrl && !imageError" :src="profileImageUrl" :alt="alt" class="w-full h-full object-cover"
            @error="handleImageError" @load="handleImageLoad" />

        <!-- Loading state -->
        <div v-if="imageLoading && !imageError && profileImageUrl" class="animate-pulse bg-gray-300 w-full h-full">
        </div>

        <!-- Fallback icon when no image or error -->
        <i v-if="!profileImageUrl || imageError" class="ki-solid ki-user text-gray-600 text-xl"></i>
    </div>
</template>