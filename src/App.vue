<template>
  <main class="container overflow-auto p-4 max-w-3xl mx-auto">
    <header class="sticky top-0">
      <h1 class="text-2xl">{{ title }}</h1>
    </header>
    <Comments v-if="comments.length" :comments="comments" />
    <div v-else class="my-6 text-muted">Brak komentarzy</div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import { fetchComments } from './utils'

import Comments from './components/Comments.vue';

const comments = ref([]);

const title = computed(() => `Komentarze (${comments.value.length})`);

(async () => {
  try {
    comments.value = await fetchComments();
  } catch (error) {
      console.error(error);
  }
})();
</script>
