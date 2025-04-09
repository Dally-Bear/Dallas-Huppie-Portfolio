import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  spinDuration,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit ? "animate-spin" : "")}
        style={{
          animationDuration: orbitDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(
              shouldSpin ? "animate-spin [animation-duration:10s]" : ""
            )}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
