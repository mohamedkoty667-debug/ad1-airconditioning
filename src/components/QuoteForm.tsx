"use client";

/*
  Quote form.
  No server needed: on submit it opens WhatsApp (or the visitor's email app)
  with all the details already written out, ready to send.
*/

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { services, site, waLink } from "@/lib/site";
import { ButtonContent, buttonClass } from "@/components/ui";

type Fields = {
  name: string;
  phone: string;
  postcode: string;
  property: "Residential" | "Commercial";
  service: string;
  details: string;
  when: string;
};

const initial: Fields = {
  name: "",
  phone: "",
  postcode: "",
  property: "Residential",
  service: "",
  details: "",
  when: "",
};

const inputCls =
  "w-full rounded-md border border-line bg-ink px-4 py-3.5 text-fg placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export default function QuoteForm() {
  const [f, setF] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<null | "whatsapp" | "email">(null);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!f.name.trim()) e.name = "Please add your name";
    if (!f.postcode.trim()) e.postcode = "Please add your postcode";
    if (!f.service) e.service = "Please choose a service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const message = () =>
    [
      `Hello ${site.name},`,
      "I'd like a quote.",
      "",
      `Name: ${f.name}`,
      f.phone ? `Phone: ${f.phone}` : null,
      `Postcode: ${f.postcode}`,
      `Property: ${f.property}`,
      `Service: ${f.service}`,
      f.when ? `Preferred time: ${f.when}` : null,
      f.details ? `\nDetails: ${f.details}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const send = (via: "whatsapp" | "email") => {
    if (!validate()) return;
    const url =
      via === "whatsapp"
        ? waLink(message())
        : `mailto:${site.email}?subject=${encodeURIComponent(
            `Quote request: ${f.service} (${f.postcode})`
          )}&body=${encodeURIComponent(message())}`;
    if (via === "whatsapp") window.open(url, "_blank", "noopener,noreferrer");
    else window.location.href = url;
    setSent(via);
  };

  return (
    <div className="relative rounded-xl border border-line bg-panel p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="py-10"
          >
            <p className="text-sm text-muted">Almost done</p>
            <h3 className="mt-3 text-3xl tracking-tight">
              {sent === "whatsapp" ? "WhatsApp has opened with your details." : "Your email app has opened with your details."}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Just press send. If nothing opened, message us directly on {site.phoneDisplay} or email{" "}
              <a href={`mailto:${site.email}`} className="link-draw text-fg">
                {site.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="mt-8 border-b border-line pb-0.5 text-fg hover:border-fg"
            >
              Edit my details
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              send("whatsapp");
            }}
            className="grid gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name" error={errors.name}>
                <input
                  className={inputCls}
                  value={f.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoComplete="name"
                  placeholder="Jane Smith"
                />
              </Field>
              <Field label="Phone (optional)">
                <input
                  className={inputCls}
                  value={f.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="07…"
                />
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Postcode" error={errors.postcode}>
                <input
                  className={inputCls}
                  value={f.postcode}
                  onChange={(e) => set("postcode", e.target.value.toUpperCase())}
                  autoComplete="postal-code"
                  placeholder="SE13 6DR"
                />
              </Field>
              <Field label="Property type" group>
                <div className="grid grid-cols-2 gap-2 rounded-md border border-line bg-ink p-1">
                  {(["Residential", "Commercial"] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => set("property", p)}
                      aria-pressed={f.property === p}
                      className={`relative rounded py-2.5 text-[15px] transition-colors ${
                        f.property === p ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {f.property === p && (
                        <motion.span
                          layoutId="property-pill"
                          className="absolute inset-0 rounded bg-panel-2"
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      )}
                      <span className="relative">{p}</span>
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <Field label="Service needed" error={errors.service}>
              <select
                className={`${inputCls} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%239aa3b2%22 stroke-width=%221.6%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[length:20px] bg-[right_14px_center] bg-no-repeat pr-12`}
                value={f.service}
                onChange={(e) => set("service", e.target.value)}
              >
                <option value="">Choose a service…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
            </Field>

            <Field label="Details (optional)">
              <textarea
                className={`${inputCls} min-h-[130px] resize-y`}
                value={f.details}
                onChange={(e) => set("details", e.target.value)}
                placeholder="What's the issue? Number of rooms, unit brand or model, any error code…"
              />
            </Field>

            <Field label="Preferred time (optional)">
              <input
                className={inputCls}
                value={f.when}
                onChange={(e) => set("when", e.target.value)}
                placeholder="e.g. weekday mornings"
              />
            </Field>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className={buttonClass("primary", "md", "flex-1")}>
                <ButtonContent>Send via WhatsApp</ButtonContent>
              </button>
              <button
                type="button"
                onClick={() => send("email")}
                className={buttonClass("secondary")}
              >
                <ButtonContent variant="secondary" icon="none">
                  Send by email instead
                </ButtonContent>
              </button>
            </div>
            <p className="text-sm text-muted">
              Tip: after sending, attach photos of the unit and any error code to speed up your quote.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  group,
  children,
}: {
  label: string;
  error?: string;
  /** use for button groups, which must not sit inside a <label> */
  group?: boolean;
  children: React.ReactNode;
}) {
  const Wrapper = group ? "div" : "label";
  return (
    <Wrapper className="grid gap-2" {...(group ? { role: "group", "aria-label": label } : {})}>
      <span className="text-sm text-muted">{label}</span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
