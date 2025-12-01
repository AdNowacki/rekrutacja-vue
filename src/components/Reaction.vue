<template>
    <div class="flex gap-2">
        <span v-for="reaction in reactions" :key="reaction" class="cursor-pointer">{{ reaction }}</span>
    </div>
</template>
<script setup>
const reactions = ["❤️", "😂", "👍", "😮", "👎"];
</script>