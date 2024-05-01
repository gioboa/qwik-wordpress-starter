import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Article } from "~/components/Article";
import type { Post } from "~/gql/graphql";
import { allPostsIndex } from "~/queries";

export const useArticles = routeLoader$(async () => {
  const articles = ((await allPostsIndex()).posts?.edges || []).map(
    ({ node }) => node,
  );
  return articles as Post[];
});

export default component$(() => {
  const articles = useArticles();
  return (
    <div class="px-4 pt-8 md:px-6 md:pt-10 lg:pt-12">
      <div class="mx-auto w-full max-w-6xl">
        <h1 class="pb-8 text-center text-3xl font-bold">WordPress Articles</h1>
        <ul class="grid grid-cols-1 gap-4">
          {articles.value.map((article, key) => (
            <Article key={key} article={article} />
          ))}
        </ul>
      </div>
    </div>
  );
});
