<template>
    <div class="flex gap-2 select-none">
        <span @click="clickHandler(reaction)" v-for="reaction in availableReactions" :key="reaction" :class="{ 'text-blue-500 underline underline-offset-8': reaction === activeReaction }" class="cursor-pointer">
            {{ countResolver(reactions, reaction) }}
        </span>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const availableReactions = ["❤️", "😂", "👍", "😮", "👎"];

const props = defineProps({
    reactions: {
        type: Object,
        default: () => ({})
    }
});

const activeReaction = ref(null);

const emit = defineEmits(['click']);

const clickHandler = (reaction) => {
    activeReaction.value = activeReaction.value === reaction ? null : reaction;
}

const countResolver = (reactions, reaction) => {
    const count = activeReaction.value && reaction === activeReaction.value ? reactions[reaction] + 1 : reactions[reaction];
    return `${reaction} ${count}`;
}
</script>