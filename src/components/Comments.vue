<template>
    <div>
      <SmartSelect id="sort-comments" v-model="sortMode" :options="sortOptions" label="Sortuj komentarze" class="my-6" />
      <div v-for="comment in sortComments" :key="comment.id" class="p-4 my-3 rounded-2xl shadow-sm border-gray-300 border">
          <Comment :comment="comment" />
          <Reactions class="mt-3" :reactions="comment.reactions" />
      </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import Comment from '@/components/Comment.vue';
import Reactions from '@/components/Reactions.vue';
import SmartSelect from '@/components/SmartSelect.vue';
import { getPopularity } from '@/utils';
import { SORT_OPTIONS } from '@/constants';

const sortOptions = Object.values(SORT_OPTIONS).map((option) => ({ label: option.LABEL, value: option.VALUE }));

const props = defineProps({
    comments: {
        type: Array,
        default: () => []
    }
});

const sortMode = defineModel({ default: SORT_OPTIONS.DATE_DESC.VALUE });

const sortComments = computed(() => {
  return props.comments.toSorted((a, b) => {
    switch (sortMode.value) {
      case SORT_OPTIONS.DATE_DESC.VALUE: return new Date(b.created_at) - new Date(a.created_at);
      case SORT_OPTIONS.DATE_ASC.VALUE: return new Date(a.created_at) - new Date(b.created_at);
      case SORT_OPTIONS.REACTIONS_DESC.VALUE: return getPopularity(b) - getPopularity(a);
      case SORT_OPTIONS.REACTIONS_ASC.VALUE: return getPopularity(a) - getPopularity(b);
    }
  });
})
</script>