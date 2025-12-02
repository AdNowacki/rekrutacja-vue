<template>
    <div>
        <div>{{ comment.author }}</div>
        <div>{{ comment.content }}</div>
        <div>Data: {{ formatDate(comment.created_at) }}</div>
        <Reaction @click="clickHandler" class="mt-3" :comment="comment" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useHelpers } from '@/composables/useHelpers';

import Reaction from './Reaction.vue';

const props = defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
});
const { formatDate } = useHelpers();

const clickHandler = (reaction) => {
    console.log(reaction);
}
</script>