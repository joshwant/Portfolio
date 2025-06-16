import { useEffect, useRef } from "react";

export default function ConstellationBackground({ containerRef }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!containerRef?.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    function setCanvasSize() {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    }
    setCanvasSize();

    const pointsCount = 120;
    const points = [];
    for (let i = 0; i < pointsCount; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    let mouse = { x: null, y: null };
    const maxDist = 120;
    const maxDistSq = maxDist * maxDist;
    const maxMouseDist = 150;
    const maxMouseDistSq = maxMouseDist * maxMouseDist;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < pointsCount; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < pointsCount; j++) {
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const alpha = 1 - distSq / maxDistSq;
            ctx.strokeStyle = `rgba(200, 200, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dxm = p1.x - mouse.x;
          const dym = p1.y - mouse.y;
          const distToMouseSq = dxm * dxm + dym * dym;
          if (distToMouseSq < maxMouseDistSq) {
            const alpha = 1 - distToMouseSq / maxMouseDistSq;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      points.forEach((p) => {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx = -p.vx;
        if (p.y <= 0 || p.y >= height) p.vy = -p.vy;
      });

      animationFrameId.current = requestAnimationFrame(draw);
    }

    draw();

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    function onResize() {
      setCanvasSize();
      points.length = 0;
      for (let i = 0; i < pointsCount; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
        });
      }
    }

    window.addEventListener("resize", onResize);

    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}