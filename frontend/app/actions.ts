"use server";

import { revalidateTag } from "next/cache";

export async function revalidateBlogs() {
  revalidateTag("getAllBlogs");
  revalidateTag("getLatestBlog");
  revalidateTag("sitemap");
}

export async function revalidateUpdatedBlog(id: string) {
  revalidateTag(`getBlog:${id}`);
}
