import { component$ } from "@builder.io/qwik";
import type { Post } from "~/gql/graphql";

type Props = {
  article: Post;
};

export const Article = component$<Props>(({ article }) => (
  <li class="m-auto flex w-full justify-center text-center md:w-9/12">
    <div class="grid grid-cols-1 gap-3 md:col-span-2">
      <h2 class="font-sans font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <a class="text-2xl" href={`/posts/${article.slug}/`}>
          {article.title}
        </a>
      </h2>
      <p class="font-serif italic tracking-tighter text-slate-500">
        {article.date} -{" "}
        {article.categories &&
          article.categories.edges.map(({ node }) => node.name).join(" ")}
      </p>
      <a
        class="font-bold text-blue-600 hover:text-blue-500"
        href={`/posts/${article.slug}/`}
      >
        Read
      </a>
    </div>
  </li>
));
