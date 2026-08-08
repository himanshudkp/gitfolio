import { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Card, SectionHeading } from "../ui";

const WEB3FORMS_ACCESS_KEY = "6db1a894-cfa7-44e7-b393-d738ff4573b4";

export function Contact() {
  const [status, setStatus] = useState("idle");

  const inputClasses =
    "w-full rounded-lg border border-border bg-canvas px-3.5 py-2.5 text-sm text-fg placeholder:text-fg-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

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

      <Card className="relative mb-12 overflow-hidden p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative">
          <div className="mb-6 flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon icon="octicon:mail-16" width={20} height={20} />
            </span>
            <div>
              <h3 className="m-0 text-lg font-semibold text-fg">Let's talk</h3>
              <p className="m-0 mt-0.5 text-sm text-fg-muted">
                Have a project in mind or just want to say hi? Drop a message
                below.
              </p>
            </div>
          </div>

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

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="flex flex-wrap items-center gap-3 border-t border-border-muted pt-5">
              <Button
                type="submit"
                icon={
                  status === "sending"
                    ? "octicon:sync-16"
                    : "octicon:paper-airplane-16"
                }
                disabled={status === "sending"}
                className="self-start shadow-md shadow-accent/20 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </Button>

              {status === "success" && (
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <Icon icon="octicon:check-circle-16" width={16} height={16} />
                  Message sent!
                </span>
              )}

              {status === "error" && (
                <span className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                  <Icon icon="octicon:alert-16" width={16} height={16} />
                  Something went wrong. Try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
}
