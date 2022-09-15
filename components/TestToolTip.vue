<script setup>
import ToolTip1 from "./ToolTip.vue";
</script>

<template>
  <ToolTip content="This is my tooltip" placement="bottom">
    <button
      class="p-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md"
    >
      Click me
    </button>
  </ToolTip>
</template>
