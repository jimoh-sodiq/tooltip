export function useTicTacToe() {
  const initialBoard = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  const boards = ref([initialBoard]);
  const currentPlayer = ref('o')

  const currentBoard = computed(() => {
    return boards.value[boards.value.length - 1];
  });

  function makeMove({ row, col }) {
    const newBoard = JSON.parse(JSON.stringify(boards.value))[
      boards.value.length - 1
    ];
    if(newBoard[row][col] == '-'){
        newBoard[row][col] = currentPlayer.value;
        currentPlayer.value = currentPlayer.value === "o" ? "x" : "o";
    }
    boards.value.push(newBoard);
  }

  function redo(){

  }

  function undo(){

  }

  return {
    boards: readonly(boards),
    currentBoard,
    makeMove,
    currentPlayer, redo, undo
  };
}
