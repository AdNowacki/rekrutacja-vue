<template>
    <div>
        <div v-for="comment in comments" :key="comment.id">
            {{ comment.content }}
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    }
})
</script>