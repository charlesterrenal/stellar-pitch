import { useEffect, useRef } from 'react';
import '../index.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  angle: number;
  velocity: number;
  distance: number;
}

const COLORS = ['#731dff', '#3c0ab4', '#c864ff', '#ff50c8']; // StellarPH inspired colors

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calculate amount based on screen size (roughly 150-300 dots)
      const numParticles = Math.floor((canvas.width * canvas.height) / 8000); 
      
      for (let i = 0; i < numParticles; i++) {
        // Random distance from center, weighted towards the center for a vortex look
        const distance = Math.pow(Math.random(), 1.2) * (Math.max(canvas.width, canvas.height) / 1.5);
        
        particles.push({
          x: 0, // Calculated in render
          y: 0,
          radius: Math.random() * 2.5 + 1.5, // 1.5px to 4px (thicker dots)
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          angle: Math.random() * Math.PI * 2,
          velocity: (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1), // Slow orbit, both directions
          distance: distance
        });
      }
    };

    const render = () => {
      // Clear canvas fully so the CSS background underneath shows through
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach(p => {
        // Update angle for orbiting effect
        p.angle += p.velocity;

        // Calculate exact position based on angle and distance from center
        p.x = centerX + Math.cos(p.angle) * p.distance;
        p.y = centerY + Math.sin(p.angle) * p.distance;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        
        // Add blurred glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = p.color;
        
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="galaxy-canvas" 
      aria-hidden="true"
    />
  );
}
