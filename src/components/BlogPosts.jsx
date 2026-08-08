import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { BLOG } from "../data";
import { Card, EmptyState, LinkButton } from "../ui";

export function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(
    BLOG.mediumUsername ? "loading" : "empty",
  );

  useEffect(() => {
    if (!BLOG.mediumUsername) return undefined;

    const rssUrl = `https://medium.com/feed/@${BLOG.mediumUsername}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
      rssUrl,
    )}`;

    let cancelled = false;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;

        if (
          data.status === "ok" &&
          Array.isArray(data.items) &&
          data.items.length > 0
        ) {
          const latestPosts = [...data.items]
            .sort(
              (a, b) =>
                new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
            )
            .slice(0, 3);

          setPosts(latestPosts);
          setStatus("ok");
        } else {
          setStatus("empty");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const mediumUrl = `https://medium.com/@${BLOG.mediumUsername}`;

  return (
    <div className="mb-10">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-fg-muted">
        <Icon icon="octicon:note-16" width={13} height={13} />
        Latest Writing
      </h3>

      {status === "loading" && (
        <EmptyState icon="octicon:sync-16">Loading latest posts…</EmptyState>
      )}

      {status === "empty" && (
        <EmptyState icon="octicon:note-16">
          No blog posts available yet. Check back soon for new articles and
          updates.
        </EmptyState>
      )}

      {status === "error" && (
        <EmptyState icon="octicon:alert-16">
          Couldn't load posts right now.{" "}
          <a
            href={mediumUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent no-underline"
          >
            View them on Medium
          </a>
        </EmptyState>
      )}

      {status === "ok" && (
        <>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="block no-underline"
              >
                <Card
                  delay={i * 60}
                  className="group relative h-full overflow-hidden p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="h-1 w-full bg-linear-to-r from-accent via-accent/60 to-transparent opacity-70 transition-opacity duration-200 group-hover:opacity-100" />

                  <div className="p-0.5 pt-3">
                    <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-fg-muted">
                      <Icon icon="simple-icons:medium" width={12} height={12} />
                      Medium
                    </div>

                    <h4 className="m-0 line-clamp-2 text-sm font-semibold leading-snug text-fg transition-colors group-hover:text-accent">
                      {post.title}
                    </h4>

                    <p className="m-0 mt-2 text-[11px] text-fg-muted">
                      {new Date(post.pubDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <LinkButton
              href={mediumUrl}
              icon="octicon:link-external-16"
              className="shadow-md shadow-accent/20 transition-transform hover:scale-[1.02]"
            >
              Go to Medium & Read Blog
            </LinkButton>
          </div>
        </>
      )}
    </div>
  );
}
