import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);

  const generateStars = (canvas) => {
    return Array(100)
      .fill()
      .map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        alpha: Math.random(),
        speed: Math.random() * 0.02,
      }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to adjust canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-generate stars when size changes
      starsRef.current = generateStars(canvas);
    };

    // Initially set up the canvas
    setCanvasSize();

    // Function to draw the stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });
    };

    // Function to update the alpha (brightness) of stars
    const updateStars = () => {
      starsRef.current.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) {
          star.speed *= -1;
        }
      });
    };

    // Animation loop to keep stars animated
    const animate = () => {
      updateStars();
      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    // Adjust canvas size on window resize
    const resize = () => {
      setCanvasSize();
    };
    window.addEventListener("resize", resize);

    // Clean up on component unmount
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", // Fixed positioning so background stays during scroll
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: "#1a202c", // Ensure the dark background that matches theme
        width: "100%",  // Full width of the viewport
        height: "100%", // Full height of the viewport
      }}
    />
  );
};

export default StarryBackground;
