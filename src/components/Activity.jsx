import { SectionHeading } from "../ui";
import { BlogPosts } from "./BlogPosts";
import { Contribution } from "./Contribution";
import { OpenSource } from "./OpenSource";

export function Activity() {
  return (
    <section>
      <SectionHeading id="activity" icon="octicon:pulse-16">
        Activity
      </SectionHeading>

      <BlogPosts />
      <Contribution />
      <OpenSource />
    </section>
  );
}
