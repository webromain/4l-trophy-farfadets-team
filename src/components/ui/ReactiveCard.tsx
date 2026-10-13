"use client";

import styles from "./ReactiveCard.module.css";

type ReactiveCardProps = {
  className?: string;
  children: React.ReactNode;
};

/* Le halo suit le pointeur via deux variables CSS. Elles sont posées par le CSSOM,
   pas par un attribut `style` : la CSP à nonce (proxy.ts) bloquerait ce dernier. */
export default function ReactiveCard({
  className = "",
  children,
}: ReactiveCardProps) {
  function trackPointer(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--y",
      `${event.clientY - bounds.top}px`,
    );
  }

  return (
    <div onPointerMove={trackPointer} className={`${styles.card} ${className}`}>
      {children}
    </div>
  );
}
