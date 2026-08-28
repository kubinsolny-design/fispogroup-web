import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || body.website) return NextResponse.json({ ok: true }, { status: 202 });
  if (typeof body.name !== "string" || body.name.trim().length < 2 || typeof body.email !== "string" || !emailPattern.test(body.email) || typeof body.phone !== "string" || body.phone.trim().length < 9 || typeof body.message !== "string" || body.message.trim().length < 10 || typeof body.service !== "string") return NextResponse.json({ error: "Zkontrolujte povinná pole." }, { status: 400 });
  // TODO: Po doplnění RESEND_API_KEY zde odeslat e-mail na CONTACT_TO_EMAIL.
  return NextResponse.json({ ok: true, mode: "demo" }, { status: 202 });
}
