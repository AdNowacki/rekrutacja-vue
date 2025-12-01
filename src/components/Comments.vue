<template>
    <div>
        <div v-for="comment in comments" :key="comment.id">
            {{ comment.content }}
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { fetchComments } from '../utils'
const emoji = ["❤️", "😂", "👍", "😮", "👎"];
const process = ref(false);
const comments = ref([]);

const loadData = async () => {
    try {
        process.value = true;
        comments.value = await fetchComments();
    } catch (error) {
        console.error(error);
    } finally {
        process.value = false;
    }
}

loadData();
</script>