<template>
  <main class="container overflow-auto px-8 max-w-3xl mx-auto">
    <header class="sticky top-0">
      <h1>Komentarze</h1>
    </header>
    <Comments :comments="comments" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { fetchComments } from './utils'

import Comments from './components/Comments.vue';

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
