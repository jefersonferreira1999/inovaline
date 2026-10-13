"use client";

import { useEffect, useState } from "react";
import styles from "./StickyCTA.module.css";
import WhatsAppCTA from "./WhatsAppCTA";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector("[data-hero-cta]");
    if (!heroCta) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.bar} data-visible={visible || undefined}>
      <WhatsAppCTA origin="sticky-mobile" variant="sticky" />
    </div>
  );
}
