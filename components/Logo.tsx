import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`logo ${inverse ? "logo-inverse" : ""}`} href="/" aria-label="FISPOGROUP – úvodní stránka">
      <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
      <span>FISPO<b>GROUP</b></span>
    </Link>
  );
}
