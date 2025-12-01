<template>
    <div class="flex gap-2">
        <span @click="emit('click', reaction)" v-for="reaction in reactions" :key="reaction" class="cursor-pointer">
            {{ reaction }} {{ comment.reactions[reaction] }}
        </span>
    </div>
</template>
<script setup>
const reactions = ["❤️", "😂", "👍", "😮", "👎"];
const emit = defineEmits(['click']);

const props = defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
});
</script>