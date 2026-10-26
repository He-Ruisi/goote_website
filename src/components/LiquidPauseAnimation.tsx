import React from 'react';
import { motion } from 'motion/react';

interface LiquidPauseAnimationProps {
  className?: string;
  size?: number;
}

export function LiquidPauseAnimation({ className = '', size = 100 }: LiquidPauseAnimationProps) {
  return (
    <div 
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 189 182"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip0_971_8000">
            <rect width="100" height="100" rx="18" />
          </clipPath>
          <linearGradient id="paint0_linear_971_8000" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#808080" />
            <stop offset="0.6" stopColor="#6e6e6e" />
            <stop offset="1" stopColor="#555555" />
          </linearGradient>
          <linearGradient id="liquid_grad_971_8000" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B7A57" />
            <stop offset="1" stopColor="#2B5F75" />
          </linearGradient>
          <filter id="filter0_ii_971_8000" x="-10" y="-10" width="120" height="120" filterUnits="userSpaceOnUse">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff" />
            <feFlood floodColor="#000" floodOpacity="0.3" />
            <feComposite in2="shadowDiff" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        <motion.g
          style={{ transformBox: 'view-box', transformOrigin: '50px 50px' }}
          initial={{ x: 44, y: 41 }}
          animate={{ x: 44, y: 41 }}
        >
          <svg x={0} y={0} width={100} height={100} viewBox="0 0 100 100" overflow="visible">
            <g fill="none">
              <motion.g
                clipPath="url(#clip0_971_8000)"
                style={{ transformBox: 'view-box', transformOrigin: '50px 77.5px' }}
              >
                {/* Background base of button */}
                <rect width="100" height="100" rx="18" fill="url(#paint0_linear_971_8000)" stroke="#F0F0F4" strokeWidth="2" strokeOpacity="0.2" />

                {/* Animated Liquid Wave */}
                <motion.g
                  initial={{ x: 0, y: 0 }}
                  animate={{
                    x: [0, -8, -8, 0, 0, -6],
                    y: [0, -3, -3, -2, -2, -3]
                  }}
                  transition={{
                    x: {
                      duration: 6,
                      times: [0, 0.1666, 0.3289, 0.5044, 0.6065, 0.7701],
                      ease: [
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1]
                      ],
                      repeat: Infinity,
                      repeatType: 'loop'
                    },
                    y: {
                      duration: 6,
                      times: [0, 0.1666, 0.3289, 0.5044, 0.6065, 0.7701],
                      ease: [
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1],
                        [0.42, 0, 0.58, 1]
                      ],
                      repeat: Infinity,
                      repeatType: 'loop'
                    }
                  }}
                  filter="url(#filter0_ii_971_8000)"
                  style={{ transformBox: 'view-box', transformOrigin: '50px 98px' }}
                >
                  <motion.path
                    initial={{
                      x: 8,
                      y: -1,
                      d: 'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 81.186 40.374 49.706 40.374 C 18.226 40.374 -7 66.52 -7 98 Z'
                    }}
                    animate={{
                      x: 8,
                      y: -1,
                      d: [
                        'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 81.186 40.374 49.706 40.374 C 18.226 40.374 -7 66.52 -7 98 Z',
                        'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 77.903 37.739 37.038 38.75 C 5.568 39.528 -7 66.52 -7 98 Z',
                        'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 77.762 37.905 36.897 38.916 C 5.426 39.695 -7 66.52 -7 98 Z',
                        'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 93.111 46.771 69.352 40.806 C 34.681 32.101 -7 66.52 -7 98 Z',
                        'M -7 98 C -7 129.48 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 93.111 46.976 69.352 41.011 C 34.681 32.306 -7 66.52 -7 98 Z',
                        'M -2.279 110.456 C -9.089 141.19 18.52 155 50 155 C 81.48 155 107 129.48 107 98 C 107 66.52 94.499 45.867 56.475 43.116 C 28.756 41.111 8.618 61.278 -7 98 Z'
                      ]
                    }}
                    transition={{
                      d: {
                        duration: 6,
                        times: [0, 0.1666, 0.3289, 0.5044, 0.6065, 0.7583],
                        ease: [
                          [0.42, 0, 0.58, 1],
                          [0.42, 0, 0.58, 1],
                          [0.42, 0, 0.58, 1],
                          [0.42, 0, 0.58, 1],
                          [0.42, 0, 0.58, 1]
                        ],
                        repeat: Infinity,
                        repeatType: 'loop'
                      }
                    }}
                    fill="url(#liquid_grad_971_8000)"
                    style={{ transformBox: 'view-box', transformOrigin: '50px 98px' }}
                  />
                </motion.g>

                {/* Pause Bar Icon Left */}
                <rect x="33" y="32" width="10" height="36" rx="5" fill="#F0F0F4" opacity="0.95" />
                {/* Pause Bar Icon Right */}
                <rect x="57" y="32" width="10" height="36" rx="5" fill="#F0F0F4" opacity="0.95" />
              </motion.g>
            </g>
          </svg>
        </motion.g>
      </svg>
    </div>
  );
}
