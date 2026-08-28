import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/uklidove-technologie", "/servis", "/stavebni-prace", "/o-spolecnosti", "/pobocky", "/kontakt", "/poptavka"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.8 : 1 })); }
