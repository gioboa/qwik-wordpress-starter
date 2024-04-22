import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/Button";
import {
  allCategories,
  allMenus,
  allPages,
  allPagesArchive,
  allPagesIndex,
  allPosts,
  allPostsArchive,
  allPostsIndex,
  allUsers,
  allUsersSeo,
  categoryBySlug,
  categorySEOBySlug,
  pageByUri,
  pageSEOByUri,
  postByAuthorSlug,
  postByAuthorSlugArchive,
  postByAuthorSlugIndex,
  postBySlug,
  postPerPage,
  postSEOBySlug,
  postsByCategoryId,
  postsByCategoryIdArchive,
  postsByCategoryIdIndex,
  seoData,
  siteData,
} from "~/queries";

export default component$(() => {
  return (
    <div class="px-6 py-8">
      <h1 class="pb-4 pl-2 text-2xl">Open the console to see the results.</h1>

      <h1 class="pb-2 pl-2 text-xl">Post queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("allPostsIndex", await allPostsIndex());
          }}
          title="allPostsIndex"
        />
        <Button
          onClick$={async () => {
            console.log("allPostsArchive", await allPostsArchive());
          }}
          title="allPostsArchive"
        />
        <Button
          onClick$={async () => {
            console.log("allPosts", await allPosts());
          }}
          title="allPosts"
        />
        <Button
          onClick$={async () => {
            console.log("postBySlug", await postBySlug("hello-world"));
          }}
          title="postBySlug"
        />
        <Button
          onClick$={async () => {
            console.log(
              "postsByCategoryIdIndex",
              await postsByCategoryIdIndex(0),
            );
          }}
          title="postsByCategoryIdIndex"
        />
        <Button
          onClick$={async () => {
            console.log(
              "postsByCategoryIdArchive",
              await postsByCategoryIdArchive(0),
            );
          }}
          title="postsByCategoryIdArchive"
        />
        <Button
          onClick$={async () => {
            console.log("postsByCategoryId", await postsByCategoryId(0));
          }}
          title="postsByCategoryId"
        />
        <Button
          onClick$={async () => {
            console.log(
              "postByAuthorSlugIndex",
              await postByAuthorSlugIndex("hello-world"),
            );
          }}
          title="postByAuthorSlugIndex"
        />
        <Button
          onClick$={async () => {
            console.log(
              "postByAuthorSlugArchive",
              await postByAuthorSlugArchive("hello-world"),
            );
          }}
          title="postByAuthorSlugArchive"
        />
        <Button
          onClick$={async () => {
            console.log(
              "postByAuthorSlug",
              await postByAuthorSlug("hello-world"),
            );
          }}
          title="postByAuthorSlug"
        />
        <Button
          onClick$={async () => {
            console.log("postSEOBySlug", await postSEOBySlug("hello-world"));
          }}
          title="postSEOBySlug"
        />
        <Button
          onClick$={async () => {
            console.log("postPerPage", await postPerPage());
          }}
          title="postPerPage"
        />
      </div>

      <h1 class="pb-2 pl-2 text-xl">Pages queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("allPagesIndex", await allPagesIndex());
          }}
          title="allPagesIndex"
        />
        <Button
          onClick$={async () => {
            console.log("allPagesArchive", await allPagesArchive());
          }}
          title="allPagesArchive"
        />
        <Button
          onClick$={async () => {
            console.log("allPages", await allPages());
          }}
          title="allPages"
        />
        <Button
          onClick$={async () => {
            console.log("pageByUri", await pageByUri("home"));
          }}
          title="pageByUri"
        />
        <Button
          onClick$={async () => {
            console.log("pageSEOByUri", await pageSEOByUri("home"));
          }}
          title="pageSEOByUri"
        />
      </div>

      <h1 class="pb-2 pl-2 text-xl">Categories queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("allCategories", await allCategories());
          }}
          title="allCategories"
        />
        <Button
          onClick$={async () => {
            console.log("categoryBySlug", await categoryBySlug("chicago"));
          }}
          title="categoryBySlug"
        />
        <Button
          onClick$={async () => {
            console.log(
              "categorySEOBySlug",
              await categorySEOBySlug("chicago"),
            );
          }}
          title="categorySEOBySlug"
        />
      </div>

      <h1 class="pb-2 pl-2 text-xl">Menus queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("allMenus", await allMenus());
          }}
          title="allMenus"
        />
      </div>

      <h1 class="pb-2 pl-2 text-xl">Site queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("siteData", await siteData());
          }}
          title="siteData"
        />
        <Button
          onClick$={async () => {
            console.log("seoData", await seoData());
          }}
          title="seoData"
        />
      </div>

      <h1 class="pb-2 pl-2 text-xl">Users queries</h1>
      <div class="flex flex-wrap justify-start pb-6">
        <Button
          onClick$={async () => {
            console.log("allUsers", await allUsers());
          }}
          title="allUsers"
        />
        <Button
          onClick$={async () => {
            console.log("allUsersSeo", await allUsersSeo());
          }}
          title="allUsersSeo"
        />
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
