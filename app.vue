<template>
  <div class="px-5">
    <!-- <NuxtWelcome /> -->
    <div class="w-fit mx-auto text-lg font-medium py-5 mb-4">
      Tooltip Manager &#x1F57A;
    </div>

    <ToolTip content="This is my tooltip" placement="right">
      <button
        class="p-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md"
      >
        Click me
      </button>
    </ToolTip>

    <TicTacToe />
  </div>
</template>
