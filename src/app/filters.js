export default function SvgFilters() {
  return (
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter
          id="sepia"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            type="matrix"
            values=".33 .33 .33 0 0
            .33 .33 .33 0 0
            .33 .33 .33 0 0
            0 0 0 1 0"
            in="SourceGraphic"
            result="colormatrix"
          />
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="table" tableValues="0.26 0.95" />
            <feFuncG type="table" tableValues="0.19 0.78" />
            <feFuncB type="table" tableValues="0.11 0.59" />
            <feFuncA type="table" tableValues="0 1" />
          </feComponentTransfer>
          <feBlend
            mode="normal"
            in="componentTransfer"
            in2="SourceGraphic"
            result="blend"
          />
        </filter>
      </defs>
    </svg>
  );
}
