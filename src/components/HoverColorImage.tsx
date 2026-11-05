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
  onOpen?: () => void;
  /** When true (default) the photo is always shown in color. Set false for black and white with a color hover. */
  alwaysColor?: boolean;
};

export default function HoverColorImage({
  bwSrc,
  colorSrc,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
  imageClassName = "object-cover",
  onOpen,
  alwaysColor = true,
}: Props) {
  const [showColor, setShowColor] = useState(alwaysColor);

  const onEnter = useCallback(() => setShowColor(true), []);
  const onLeave = useCallback(() => setShowColor(alwaysColor), [alwaysColor]);
  const onActivate = useCallback(() => {
    if (onOpen) {
      onOpen();
      return;
    }
    if (alwaysColor) return;
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
      setShowColor((v) => !v);
    }
  }, [onOpen, alwaysColor]);

  return (
    <div
      role={onOpen || !alwaysColor ? "button" : undefined}
      tabIndex={onOpen || !alwaysColor ? 0 : undefined}
      aria-pressed={onOpen || alwaysColor ? undefined : showColor}
      aria-label={onOpen ? `${alt}. Open larger view.` : alwaysColor ? undefined : `${alt}. Hover or tap to view in color.`}
      className={`group absolute inset-0 ${onOpen || !alwaysColor ? "cursor-pointer" : ""} overflow-hidden ${className}`.trim()}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (onOpen) onOpen();
          else if (!alwaysColor) setShowColor((v) => !v);
        }
      }}
    >
      {alwaysColor ? (
        <Image
          src={colorSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={imageClassName}
        />
      ) : (
        <>
          <Image src={bwSrc} alt={alt} fill sizes={sizes} priority={priority} className={imageClassName} />
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
        </>
      )}
    </div>
  );
}
