import { SectionHeading } from "../ui/SectionHeading";
import { Contribution } from "./Contribution";
import { OpenSource } from "./OpenSource";
import { BlogPosts } from "./BlogPosts";

export default function Activity() {
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
