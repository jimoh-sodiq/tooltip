<script setup>
import { computePosition, flip, shift, offset, arrow } from "@floating-ui/dom";

const props = defineProps({
  placement: {
    type: String,
    default: "bottom",
  },
  content: {
    type: String,
    default: "",
  },
});

const referenceRef = ref();
const floatingRef = ref();
const arrowRef = ref();
const isHidden = ref(true);

async function calculatePosition() {
  const { x, y, middlewareData, placement } = await computePosition(
    referenceRef.value,
    floatingRef.value,
    {
      placement: props.placement,
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowRef.value }),
      ],
    }
  );

  Object.assign(floatingRef.value.style, {
    left: `${x}px`,
    top: `${y}px`,
  });

  const { x: arrowX, y: arrowY } = middlewareData.arrow;

  const opposedSide = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  }[placement.split("-")[0]];

  Object.assign(arrowRef.value.style, {
    left: arrowX ? `${arrowX}px` : "",
    top: arrowY ? `${arrowY}px` : "",
    bottom: "",
    right: "",
    [opposedSide]: "-4px",
  });
}

onMounted(async () => {});

function hide() {
  isHidden.value = true;
}

function show() {
  isHidden.value = false;
  calculatePosition();
}
</script>

<template>
  <div class="w-full">
    <div class="inline-block relative">
      <div
        ref="referenceRef"
        @mouseenter="show"
        @mouseleave="hide"
        @focus="show"
        @blur="hide"
        class="inline-block"
      >
        <slot />
      </div>
      <div
        ref="floatingRef"
        :class="[
          'bg-gray-700 absolute top-0 left-0 z-30 text-sm whitespace-nowrap text-white px-3 py-1.5 rounded-md cursor-default',
          isHidden && 'hidden',
        ]"
      >
        {{ props.content }}

        <div
          class="absolute bg-gray-700 h-2 w-2 rotate-45"
          ref="arrowRef"
        ></div>
      </div>
    </div>
  </div>
</template>
