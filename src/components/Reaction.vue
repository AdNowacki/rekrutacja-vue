<template>
    <div class="flex gap-2">
        <span @click="clickHandler(reaction)" v-for="reaction in reactions" :key="reaction" class="cursor-pointer">
            {{ reaction }} {{ calculatedReaction(comment.reactions, reaction) }}
        </span>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const reactions = ["❤️", "😂", "👍", "😮", "👎"];
const emit = defineEmits(['click']);

const myReaction = ref(null);

const props = defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
});

const clickHandler = (reaction) => {
    myReaction.value = myReaction.value === reaction ? null : reaction;
}

const calculatedReaction = (reactions, reaction) => {
    if (!myReaction.value || reaction !== myReaction.value) return reactions[reaction];

    return reactions[reaction] + 1;
}
</script>