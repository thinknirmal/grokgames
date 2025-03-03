import { ref, computed } from 'vue';

// Simple in-memory cache for profile images
const imageCache = new Map<string, string>();

export function useProfileImage() {
    const imageLoading = ref(true);
    const imageError = ref(false);

    /**
     * Get a cached profile image URL or use the original
     * This helps reduce the number of requests to Google's servers
     */
    const getProfileImageUrl = (photoURL: string | null) => {
        if (!photoURL) return null;

        // Check if we have a cached version
        if (imageCache.has(photoURL)) {
            return imageCache.get(photoURL);
        }

        // For Google profile images, we can modify the URL to request a smaller size
        // This reduces bandwidth and may help with rate limiting
        if (photoURL.includes('googleusercontent.com')) {
            // Request a smaller image size (96px)
            const modifiedUrl = photoURL.replace(/=s\d+-c/, '=s96-c');
            imageCache.set(photoURL, modifiedUrl);
            return modifiedUrl;
        }

        // For other URLs, just cache the original
        imageCache.set(photoURL, photoURL);
        return photoURL;
    };

    // Handle image loading error
    const handleImageError = () => {
        imageError.value = true;
        imageLoading.value = false;
    };

    // Handle image loading success
    const handleImageLoad = () => {
        imageLoading.value = false;
    };

    return {
        imageLoading,
        imageError,
        getProfileImageUrl,
        handleImageError,
        handleImageLoad
    };
} 