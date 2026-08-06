import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

const WEB3FORMS_ACCESS_KEY = "6db1a894-cfa7-44e7-b393-d738ff4573b4";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const inputClasses =
    "w-full rounded-md border border-border bg-canvas px-3 py-2.5 text-sm text-fg placeholder:text-fg-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  const labelClasses = "mb-1.5 block text-xs font-semibold text-fg-muted";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section>
      <SectionHeading id="contact" icon="octicon:mail-16">
        Get in touch
      </SectionHeading>

      <Card className="mb-12 p-5 sm:p-6">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClasses}
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className={`${inputClasses} resize-y`}
              placeholder="Let's work together…"
            />
          </div>

          {/* Honeypot field to reduce spam — hidden from real users */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="flex items-center gap-3">
            <Button
              type="submit"
              icon={
                status === "sending"
                  ? "octicon:sync-16"
                  : "octicon:paper-airplane-16"
              }
              disabled={status === "sending"}
              className="self-start"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>

            {status === "success" && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
                <Icon icon="octicon:check-circle-16" width={16} height={16} />
                Message sent!
              </span>
            )}

            {status === "error" && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                <Icon icon="octicon:alert-16" width={16} height={16} />
                Something went wrong. Try again.
              </span>
            )}
          </div>
        </form>
      </Card>
    </section>
  );
}
