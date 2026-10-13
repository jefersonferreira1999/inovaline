"use client";

import { useRef, useState } from "react";
import styles from "./WhatsAppCTA.module.css";
import {
  CTA_CONFIRM_LABEL,
  CTA_LABEL,
  WHATSAPP_MESSAGE,
  buildWhatsAppLink,
} from "@/lib/config";
import { trackQuoteRequest } from "@/lib/analytics";

type WhatsAppCTAProps = {
  origin: string;
  variant?: "primary" | "sticky" | "compact";
  className?: string;
};

export default function WhatsAppCTA({
  origin,
  variant = "primary",
  className,
}: WhatsAppCTAProps) {
  const [confirmed, setConfirmed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleClick() {
    trackQuoteRequest(origin);
    setConfirmed(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setConfirmed(false), 3200);
  }

  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={[styles.cta, styles[variant], className].filter(Boolean).join(" ")}
      aria-live="polite"
      data-confirmed={confirmed || undefined}
    >
      <span className={styles.label}>
        <span className={styles.labelDefault} aria-hidden={confirmed}>
          {CTA_LABEL}
        </span>
        <span className={styles.labelConfirm} aria-hidden={!confirmed}>
          {CTA_CONFIRM_LABEL}
        </span>
      </span>
    </a>
  );
}
