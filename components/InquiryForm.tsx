"use client";

import { FormEvent, useState } from "react";

type Props = { artworkTitle?: string };

export default function InquiryForm({ artworkTitle }: Props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState(artworkTitle ? `I am interested in “${artworkTitle}”.` : "I would like a private selection.");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = artworkTitle ? `Artwork inquiry — ${artworkTitle}` : "Private art inquiry";
    const body = [`Name: ${name}`, `Contact: ${contact}`, "", message].join("\n");
    window.location.href = `mailto:studio@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" />
      </label>
      <label>
        <span>Email / phone / messenger</span>
        <input required value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Preferred contact" />
      </label>
      <label>
        <span>Message</span>
        <textarea required rows={5} value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <button className="button button-dark" type="submit">Prepare inquiry</button>
      <small>The studio email is currently a placeholder and will be replaced before launch.</small>
    </form>
  );
}
