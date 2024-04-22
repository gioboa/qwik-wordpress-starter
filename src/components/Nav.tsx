import { component$ } from "@builder.io/qwik";
import { GitHubLink } from "./GitHubLink";
import { Qwik } from "./Icons/Qwik";

export const Nav = component$(() => {
  return (
    <nav class="whitespace-nowrap bg-white px-6 py-4 text-xl font-semibold text-gray-800 shadow ">
      <div class="flex flex-row justify-between">
        <div class="flex items-center justify-between">
          <a href="/" class="ms-2 flex hover:text-blue-500 md:me-24">
            <Qwik />
            <span class="self-center">Qwik WordPress Starter</span>
          </a>
        </div>
        <a href="/" class="mr-14 hidden hover:text-blue-500 md:block">
          <span>About Us</span>
        </a>
      </div>
      <GitHubLink />
    </nav>
  );
});
