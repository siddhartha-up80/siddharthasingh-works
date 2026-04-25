/**
 * Modern, high-quality SVG social media icons
 * These replace the old low-resolution PNG icons with crisp, scalable SVGs
 * that blend seamlessly with the site's red/dark theme.
 */

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export const InstagramSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
  >
    <defs>
      <radialGradient
        id="ig_grad1"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5" />
        <stop offset="0.328" stopColor="#ff543f" />
        <stop offset="0.348" stopColor="#fc5245" />
        <stop offset="0.504" stopColor="#e64771" />
        <stop offset="0.643" stopColor="#d53e91" />
        <stop offset="0.761" stopColor="#cc39a4" />
        <stop offset="0.841" stopColor="#c837ab" />
      </radialGradient>
      <radialGradient
        id="ig_grad2"
        cx="11.786"
        cy="-0.206"
        r="65.499"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9" />
        <stop offset="0.999" stopColor="#4168c9" stopOpacity="0" />
      </radialGradient>
    </defs>
    <path
      fill="url(#ig_grad1)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <path
      fill="url(#ig_grad2)"
      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
    />
    <path
      fill="#fff"
      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
    />
    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
    <path
      fill="#fff"
      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5	H18z"
    />
  </svg>
);

export const GithubSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
  >
    <path
      fill="currentColor"
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
    />
  </svg>
);

export const XTwitterSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
  >
    <path
      fill="currentColor"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

export const LinkedinSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
  >
    <path
      fill="#0288D1"
      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    />
    <path
      fill="#fff"
      d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    />
  </svg>
);

export const EmailSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width={size}
    height={size}
    className={className}
  >
    <defs>
      <linearGradient
        id="mail_grad"
        x1="4"
        y1="24"
        x2="44"
        y2="24"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#e53935" />
        <stop offset="1" stopColor="#ef5350" />
      </linearGradient>
    </defs>
    <path
      fill="url(#mail_grad)"
      d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
    />
    <path fill="#d32f2f" d="M26,24.036L46,11v26c0,1.105-0.895,2-2,2H4c-1.105,0-2-0.895-2-2V11L22,24.036 C22.591,24.379,25.409,24.379,26,24.036z" />
    <path
      fill="#eee"
      d="M24,24.5L4,11.9C4,10.3,5.3,9,6.9,9h34.2c1.6,0,2.9,1.3,2.9,2.9L24,24.5z"
    />
    <path
      fill="#fff"
      d="M24,24.5L4,11.9C4,10.3,5.3,9,6.9,9h34.2c1.6,0,2.9,1.3,2.9,2.9L24,24.5z"
      opacity="0.6"
    />
  </svg>
);

export const TerminalSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="18" rx="3" />
    <polyline points="7 8 11 12 7 16" />
    <line x1="13" y1="16" x2="17" y2="16" />
  </svg>
);

export const ShareSvgIcon: React.FC<IconProps> = ({
  className = "",
  size = 40,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
