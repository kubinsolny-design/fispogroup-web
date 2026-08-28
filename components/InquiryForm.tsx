"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/poptavka", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className={`inquiry-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      <div className="honeypot" aria-hidden="true"><label>Web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label>O co máte zájem?<select name="service" required defaultValue=""><option value="" disabled>Vyberte oblast</option><option>Úklidová technika a vybavení</option><option>Servis stroje</option><option>Jádrové vrtání a stavební práce</option><option>Jiný požadavek</option></select></label>
      <div className="form-row"><label>Jméno a firma<input name="name" required minLength={2} placeholder="Jan Novák, Firma s.r.o." /></label><label>Telefon<input name="phone" type="tel" required pattern="[+0-9 ()-]{9,}" placeholder="+420 000 000 000" /></label></div>
      <label>E-mail<input name="email" type="email" required placeholder="vas@email.cz" /></label>
      <label>Jak vám můžeme pomoci?<textarea name="message" rows={compact ? 3 : 5} required minLength={10} placeholder="Stručně popište svůj požadavek…" /></label>
      <label className="consent"><input type="checkbox" required /> <span>Souhlasím se zpracováním údajů za účelem vyřízení poptávky.</span></label>
      <button className="form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Odesílám…" : "Odeslat poptávku"}<span>↗</span></button>
      <p className={`form-message ${status}`} role="status">{status === "success" && "Děkujeme. Poptávka byla přijata v demo režimu; e-mailové odesílání bude aktivováno po doplnění služby."}{status === "error" && "Poptávku se nepodařilo odeslat. Zavolejte nám prosím na +420 606 657 161."}</p>
    </form>
  );
}
