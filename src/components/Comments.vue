<template>
    <div>
        <h2>{{ commentsCount }}</h2>
        <div v-for="comment in comments" :key="comment.id" class="border p-4 my-2">
            <Comment :comment="comment" />
        </div>
    </div>
</template>
<script setup>
import { defineProps, computed } from 'vue';
import Comment from './Comment.vue'

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    }
});

const commentsCount = computed(() => `Liczba wszystkich komentarzy to: ${props.comments.length}`)
</script>