"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

type Props = {
  bwSrc: string;
  colorSrc: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export default function HoverColorImage({
  bwSrc,
  colorSrc,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
  imageClassName = "object-cover",
}: Props) {
  const [showColor, setShowColor] = useState(false);

  const onEnter = useCallback(() => setShowColor(true), []);
  const onLeave = useCallback(() => setShowColor(false), []);
  const onActivate = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      setShowColor((v) => !v);
    }
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={showColor}
      aria-label={`${alt}. Hover or tap to view in color.`}
      className={`group absolute inset-0 cursor-pointer overflow-hidden ${className}`.trim()}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setShowColor((v) => !v);
        }
      }}
    >
      <Image
        src={bwSrc}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
      <Image
        src={colorSrc}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        priority={priority}
        className={`${imageClassName} transition-opacity duration-500 ease-out ${
          showColor ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
