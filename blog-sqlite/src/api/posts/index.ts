import { redirect } from "elizabeth/route";
import { createPost, deletePost } from "@/db.ts";

export async function POST(ctx: { request: Request }) {
  const form = await ctx.request.formData();
  const title = String(form.get("title") ?? "");
  const excerpt = String(form.get("excerpt") ?? "");
  const body = String(form.get("body") ?? "");

  if (!title.trim() || !excerpt.trim() || !body.trim()) {
    return new Response("Missing title, excerpt, or body.", {
      status: 400,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  const post = createPost({ title, excerpt, body });
  return redirect(`/posts/${post.slug}`, 303);
}

export async function DELETE(ctx: { request: Request }) {
  const data = await ctx.request.json()
  const title = data.title
  
  if (!title.trim()) {
    return new Response("Missing title.", {
      status: 400,
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  const status = deletePost({ title });
  return new Response(status, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8"
    }
  })
}
