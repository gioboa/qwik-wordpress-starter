import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer";
import { Nav } from "~/components/Nav";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="font-roboto h-full bg-gray-100">
      <Nav />
      <main class="h-[calc(100%-120px)]">
        <Slot />
      </main>
      <Footer />
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
