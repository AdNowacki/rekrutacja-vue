<template>
    <div>
        <div v-for="comment in comments" :key="comment.id" class="p-4 my-3 rounded-2xl shadow-sm border-gray-300 border">
            <Comment :comment="comment" />
            <Reactions class="mt-3" :reactions="comment.reactions" />
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import Comment from './Comment.vue'
import Reactions from './Reactions.vue';

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    }
});
</script>