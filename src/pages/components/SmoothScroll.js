import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const onStart = () => {
      lenisRef.current?.lenis?.scrollTo(0, { immediate: true });
    };
    router.events.on("routeChangeStart", onStart);
    return () => router.events.off("routeChangeStart", onStart);
  }, [router.events]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        anchors: { offset: -80 },
      }}
    >
      {children}
    </ReactLenis>
  );
}
