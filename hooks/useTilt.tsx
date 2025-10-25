import { useEffect, useRef } from "react";

// Small hook to add a tilt effect to an element on pointer move
export default function useTilt(active = true) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!ref.current || !active) return;
        const el = ref.current;
        const handleMove = (e: PointerEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within element
            const y = e.clientY - rect.top; // y position within element
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const dx = (x - cx) / cx;
            const dy = (y - cy) / cy;
            const rotateX = (dy * 8).toFixed(2);
            const rotateY = (dx * -8).toFixed(2);
            el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
        };
        const handleLeave = () => {
            el.style.transform = "rotateX(0deg) rotateY(0deg)";
        };

        el.addEventListener("pointermove", handleMove);
        el.addEventListener("pointerleave", handleLeave);
        el.addEventListener("pointerdown", handleLeave);

        return () => {
            el.removeEventListener("pointermove", handleMove);
            el.removeEventListener("pointerleave", handleLeave);
            el.removeEventListener("pointerdown", handleLeave);
            if (el) el.style.transform = "";
        };
    }, [active]);

    return ref;
}
