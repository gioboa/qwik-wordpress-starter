import type { QRL } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

export const Button = component$<{ title: string; onClick$: QRL<() => void> }>(
  ({ title, onClick$ }) => {
    return (
      <button
        class="mx-2 my-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick$={onClick$}
      >
        {title}
      </button>
    );
  },
);
