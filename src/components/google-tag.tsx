"use client";

import Script from "next/script";
import { useEffect } from "react";
import { ADS_ID, GA4_ID, trackBookClick, trackContactClick } from "@/lib/tracking";

// Loads the Google tag (Google Ads + GA4) on every page and records clicks on any SevenRooms
// booking link, tel: link or mailto: link site-wide. PDF downloads and other outbound clicks are
// recorded by GA4 enhanced measurement.
export function GoogleTag() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") || "";
      if (href.includes("sevenrooms.com")) trackBookClick(window.location.pathname);
      else if (href.startsWith("tel:")) trackContactClick("phone");
      else if (href.startsWith("mailto:")) trackContactClick("email");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('set', 'linker', {domains: ['sevenrooms.com']});
gtag('config', '${GA4_ID}');
gtag('config', '${ADS_ID}');`}
      </Script>
    </>
  );
}
