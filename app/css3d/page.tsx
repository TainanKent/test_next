"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

type animate = "x" | "y" | "z" | "xy";

/**
 * CSS 3D 動畫測試
 * 部分CSS 寫在global.css
 * 需調整 tailwind.config.css 的動畫參數
 */
export default function Css3d() {
  // 旋轉軸心 種類
  const [animateType, setAnimateType] = useState<animate>("x");
  // 透視 的距離參數
  const [perspective, setPerspective] = useState(1000);
  // 是否為3D物件
  const [is3D, setIs3D] = useState(true);

  return (
    <main>
      <div className="flex flex-col items-center gap-5">
        <div className="h-[50px]"></div>
        <div className="h-[50px]">Css 3D</div>
        <div>
          <Image alt="xyz" width="1000" height="200" src="/image/xyz介紹.png" />
        </div>
        <div className="h-[100px]">
          <div>設定透視(指定了觀察者與 z=0 平面的距離): perspective: ???px</div>
          <div>設定為3D物件: transform-style: preserve-3d</div>
        </div>
        <div className="grid grid-cols-2 w-full h-[300px]">
          <div className="flex flex-col items-end pr-[200px] gap-2">
            <div>
              animate(旋轉軸心):
              <select
                value={animateType}
                onChange={(e) => setAnimateType(e.target.value as animate)}
                className="w-[100px] ml-3 text-lg"
              >
                <option value="x">x軸</option>
                <option value="y">y軸</option>
                <option value="z">z軸</option>
                <option value="xy">x+y軸</option>
              </select>
            </div>
            <div>
              transform-style(設定為3D物件): preserve-3d
              <input
                type="checkbox"
                className="ml-2"
                checked={is3D}
                onChange={(e) => {
                  setIs3D(e.target.checked);
                }}
              />
            </div>
            <div>
              perspective(透視):　
              <input
                type="range"
                value={perspective}
                min="200"
                max="1000"
                onChange={(e) => {
                  setPerspective(+e.target.value);
                }}
              />
              <span className="ml-3">{perspective}</span>
            </div>
          </div>
          <div>
            <div
              className="w-[200px] h-[200px]"
              style={{ perspective: `${perspective}px` }}
            >
              <div
                className={clsx(["relative", "w-full", "h-full"], {
                  "animate-cubeX": animateType === "x",
                  "animate-cubeY": animateType === "y",
                  "animate-cubeZ": animateType === "z",
                  "animate-cubeXY": animateType === "xy",
                })}
                style={{ transformStyle: is3D ? "preserve-3d" : "flat" }}
              >
                <div className="face cube_front">前</div>
                <div className="face cube_back">後</div>
                <div className="face cube_right">右</div>
                <div className="face cube_left">左</div>
                <div className="face cube_top">上</div>
                <div className="face cube_bottom">下</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full h-[100px]">
          <div className="flex flex-col items-end pr-[200px]">彈跳動畫</div>
          <div>
            <button
              type="button"
              className="bg-indigo-500 flex p-3 rounded-xl animate-bounce"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full h-[100px]">
          <div className="flex flex-col items-end pr-[200px]">抖動動畫</div>
          <div>
            <button className="shape shake bg-indigo-500 w-[100px] p-3 rounded-xl">
              test
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
