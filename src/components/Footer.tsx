import { component$ } from "@builder.io/qwik";
import { GitIcon } from "./Icons/GitIcon";

export const Footer = component$(() => {
  return (
    <footer class="w-full bg-gray-800 px-12 py-4 text-gray-100">
      <a
        class="flex items-center space-x-4 font-medium hover:text-gray-300"
        target="_blank"
        href="https://github.com/gioboa/qwik-wordpress-starter"
      >
        <GitIcon />
        <span>github.com/gioboa/qwik-wordpress-starter</span>
      </a>
    </footer>
  );
});
