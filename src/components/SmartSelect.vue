<template>
  <div class="relative w-100">
    <label v-if="label" :for="id" class="text-sm">{{ label }}</label>
    <select
      :id="id"
      v-model="smartSelectModel"
      :value="modelValue"
      @input="updateValue"
      class="block w-full rounded-xl border border-gray-400 bg-white py-2.5 pl-4 pr-8 text-sm text-gray-900"
    >
      <option v-for="option in options" :value="option.value" :key="option.value" :selected="option.value === modelValue.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  }
})

const smartSelectModel = defineModel();
</script>