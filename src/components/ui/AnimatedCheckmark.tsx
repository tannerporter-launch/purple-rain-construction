import { useEffect, useState } from "react";

interface AnimatedCheckmarkProps {
  size?: number;
  className?: string;
}

const AnimatedCheckmark = ({ size = 80, className = "" }: AnimatedCheckmarkProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Circle */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        style={{ width: size, height: size }}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          strokeLinecap="round"
          className={`transition-all duration-500 ease-out ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            strokeDasharray: 283,
            strokeDashoffset: isAnimating ? 0 : 283,
            transition: "stroke-dashoffset 0.6s ease-out, opacity 0.3s ease-out",
          }}
        />
      </svg>
      
      {/* Checkmark */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0"
        style={{ width: size, height: size }}
      >
        <path
          d="M30 50 L45 65 L70 35"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-all duration-300 ease-out ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            strokeDasharray: 60,
            strokeDashoffset: isAnimating ? 0 : 60,
            transition: "stroke-dashoffset 0.4s ease-out 0.4s, opacity 0.3s ease-out 0.4s",
          }}
        />
      </svg>
    </div>
  );
};

export default AnimatedCheckmark;