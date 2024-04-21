import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import dayjs from "dayjs";
import { getAllPosts } from "~/queries";

export const usePosts = routeLoader$(async () => await getAllPosts());

export default component$(() => {
  const posts = usePosts();
  return (
    <div class="px-6 py-8">
      <div class="container mx-auto flex justify-between">
        <div class="w-full lg:w-8/12">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
            <div>
              <select class="block rounded-lg bg-gray-300 px-2 py-2 text-gray-700 focus:outline-none md:py-3">
                <option>Latest</option>
                <option>Last Week</option>
              </select>
            </div>
          </div>
          {posts.value.map((post, key) => (
            <div key={key} class="mt-6">
              <div class="max-w-4xl rounded-lg bg-white px-10 py-6 shadow-md">
                <div class="flex items-center justify-between">
                  <span class="font-light text-gray-600">
                    {dayjs(post.date).format("MMM D, YYYY")}
                  </span>
                  <div class="flex flex-row justify-end">
                    {post.categories?.edges.map((e, key) => (
                      <a
                        key={key}
                        href="#"
                        class="ml-2 rounded bg-gray-600 px-2 py-1 font-bold text-gray-100 hover:bg-gray-500"
                      >
                        {e.node.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div class="mt-2">
                  <a
                    href="#"
                    class="text-2xl font-bold text-gray-700 hover:underline"
                  >
                    {post.title}
                  </a>
                  <p
                    class="mt-2 text-gray-600"
                    dangerouslySetInnerHTML={post.excerpt || ""}
                  />
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <a href="#" class="text-blue-500 hover:underline">
                    Read more
                  </a>
                  <div>
                    <a href="#" class="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar"
                        class="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
                        width={10}
                        height={10}
                      />
                      <h1 class="font-bold text-gray-700 hover:underline">
                        {post.author?.node.name}
                      </h1>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div class="mt-8">
            <ul class="flex">
              <li class="mx-1 rounded-lg bg-gray-200 px-3 py-2 text-gray-500">
                <a href="#" class="flex items-center font-bold">
                  previous
                </a>
              </li>
              <li class="mx-1 rounded-lg bg-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200">
                <a href="#" class="font-bold">
                  1
                </a>
              </li>
              <li class="mx-1 rounded-lg bg-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200">
                <a href="#" class="font-bold">
                  2
                </a>
              </li>
              <li class="mx-1 rounded-lg bg-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200">
                <a href="#" class="font-bold">
                  3
                </a>
              </li>
              <li class="mx-1 rounded-lg bg-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-700 hover:text-gray-200">
                <a href="#" class="flex items-center font-bold">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="-mx-8 hidden w-4/12 lg:block">
          <div class="px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
            <div class="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-6 py-4 shadow-md">
              <ul class="-mx-4">
                <li class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="mx-4 h-10 w-10 rounded-full object-cover"
                  />
                  <p>
                    <a
                      href="#"
                      class="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      Alex John
                    </a>
                    <span class="text-sm font-light text-gray-700">
                      Created 23 Posts
                    </span>
                  </p>
                </li>
                <li class="mt-6 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                    alt="avatar"
                    class="mx-4 h-10 w-10 rounded-full object-cover"
                  />
                  <p>
                    <a
                      href="#"
                      class="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      Jane Doe
                    </a>
                    <span class="text-sm font-light text-gray-700">
                      Created 52 Posts
                    </span>
                  </p>
                </li>
                <li class="mt-6 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                    alt="avatar"
                    class="mx-4 h-10 w-10 rounded-full object-cover"
                  />
                  <p>
                    <a
                      href="#"
                      class="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      Lisa Way
                    </a>
                    <span class="text-sm font-light text-gray-700">
                      Created 73 Posts
                    </span>
                  </p>
                </li>
                <li class="mt-6 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                    alt="avatar"
                    class="mx-4 h-10 w-10 rounded-full object-cover"
                  />
                  <p>
                    <a
                      href="#"
                      class="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      Steve Matt
                    </a>
                    <span class="text-sm font-light text-gray-700">
                      Created 245 Posts
                    </span>
                  </p>
                </li>
                <li class="mt-6 flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                    alt="avatar"
                    class="mx-4 h-10 w-10 rounded-full object-cover"
                  />
                  <p>
                    <a
                      href="#"
                      class="mx-1 font-bold text-gray-700 hover:underline"
                    >
                      Khatab Wedaa
                    </a>
                    <span class="text-sm font-light text-gray-700">
                      Created 332 Posts
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <div class="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-4 py-6 shadow-md">
              <ul>
                <li>
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - AWS
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - Laravel
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - Vue
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - Design
                  </a>
                </li>
                <li class="mt-2 flex items-center">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - Django
                  </a>
                </li>
                <li class="mt-2 flex items-center">
                  <a
                    href="#"
                    class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                  >
                    - PHP
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-10 px-8">
            <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <div class="mx-auto flex max-w-sm flex-col rounded-lg bg-white px-8 py-6 shadow-md">
              <div class="flex items-center justify-center">
                <a
                  href="#"
                  class="rounded bg-gray-600 px-2 py-1 text-sm text-green-100 hover:bg-gray-500"
                >
                  Laravel
                </a>
              </div>
              <div class="mt-4">
                <a
                  href="#"
                  class="text-lg font-medium text-gray-700 hover:underline"
                >
                  Build Your New Idea with Laravel Freamwork.
                </a>
              </div>
              <div class="mt-4 flex items-center justify-between">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    class="h-8 w-8 rounded-full object-cover"
                  />
                  <a
                    href="#"
                    class="mx-3 text-sm text-gray-700 hover:underline"
                  >
                    Alex John
                  </a>
                </div>
                <span class="text-sm font-light text-gray-600">
                  Jun 1, 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik WordPress starter",
  meta: [
    {
      name: "description",
      content: "Qwik WordPress starter",
    },
  ],
};
