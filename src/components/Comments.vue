<template>
    <div>
        <h2>{{ commentsCount }}</h2>
        <div v-for="comment in comments" :key="comment.id" class="border p-4 my-2">
            <div>{{ comment.author }}</div>
            <div>{{ comment.content }}</div>
            <div>Data: {{ formatDate(comment.created_at) }}</div>
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue';
import { useHelpers } from '@/composables/useHelpers';

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    }
});

const commentsCount = computed(() => `Liczba wszystkich komentarzy to: ${props.comments.length}`)

const { formatDate } = useHelpers();
</script>