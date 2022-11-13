<template>
  <div v-for="(row, rowIdx) in currentBoard" class="row">
    <div v-for="(col, colIdx) in row" class="col" @click="makeMove({ row: rowIdx, col: colIdx })">
      {{ col }}
    </div>
  </div>
</template>

<script setup>
const { boards, currentBoard, makeMove, currentPlayer } = useTicTacToe();
</script>

<style scoped>
.row {
  display: flex;
}
.col {
  border: 1px solid black;
  height: 50px;
  width: 50px;
}
</style>
