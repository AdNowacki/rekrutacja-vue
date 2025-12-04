<template>
    <div>{{ comment.content }}</div>
    <div class="text-xs mt-2 pt-1 border-t-gray-300 border-t w-fit">{{ signature }}</div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { formatDate } from '@/utils';

const props = defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
});

const signature = computed(() => {
    return `${props.comment.author} | ${formatDate(props.comment.created_at)}`;
});
</script>