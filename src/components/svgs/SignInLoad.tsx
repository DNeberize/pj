export default function SignInLoad() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="scale"
          from="0.5"
          to="1"
          begin="0s"
          dur="0.5s"
          fill="freeze"
        />

        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#ffffff"
          strokeWidth="20"
          strokeDasharray="400 480"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 100 100"
            to="360 100 100"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
