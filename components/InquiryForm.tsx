"use client";

import { FormEvent, useState } from "react";

type Props = { artworkTitle?: string };

export default function InquiryForm({ artworkTitle }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState(artworkTitle ? `I am interested in “${artworkTitle}”.` : "I would like a private selection.");
  const [notice, setNotice] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const studioEmail = process.env.NEXT_PUBLIC_STUDIO_EMAIL;
    const subject = artworkTitle ? `Artwork inquiry — ${artworkTitle}` : "Private art inquiry";
    const body = [`Name: ${name}`, `Contact: ${contact}`, "", message].join("\n");

    if (studioEmail) {
      window.location.href = `mailto:${studioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    const inquiry = `${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(inquiry);
      setNotice("Inquiry copied. Studio contact channel will be published before launch.");
    } catch {
      setNotice("Studio contact channel will be published before launch. Please save your message for now.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <label><span>Name</span><input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label>
      <label><span>Email / phone / messenger</span><input required value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Preferred contact" /></label>
      <label><span>Message</span><textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
      <button className="button button-dark" type="submit">Prepare inquiry</button>
      {notice ? <small role="status">{notice}</small> : <small>Contact details are configured through NEXT_PUBLIC_STUDIO_EMAIL.</small>}
    </form>
  );
}
