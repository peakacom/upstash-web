import {
  ProductBox,
  ProductFeature,
  ProductFeatureItem,
  ProductTitle,
} from "./comp";
import Button from "@/components/button";
import React from "react";
import { Product } from "@/utils/type";
import colors from "tailwindcss/colors";

export default function ServerlessQStash() {
  return (
    <ProductBox
      product={Product.QSTASH}
      className="bg-purple-200/5 md:col-span-2"
    >
      <header>
        <svg
          className="mb-6"
          width={60}
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="360" height="360" rx="80" fill={colors.purple["100"]} />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M162 57C162 47.6112 169.611 40 179 40C188.389 40 196 47.6112 196 57V140L254.979 81.0208C261.618 74.3819 272.382 74.3819 279.021 81.0208C285.66 87.6597 285.66 98.4235 279.021 105.062L220.083 164H303C312.389 164 320 171.611 320 181C320 190.389 312.389 198 303 198H219.255L279.011 257.756C285.259 264.004 285.259 274.135 279.011 280.383C272.762 286.632 262.632 286.632 256.383 280.383L196 220V304C196 313.389 188.389 321 179 321C169.611 321 162 313.389 162 304V222.083L104.365 279.718C97.7265 286.357 86.9627 286.357 80.3238 279.718C73.6849 273.079 73.6849 262.315 80.3238 255.676L138 198H56C46.6112 198 39 190.389 39 181C39 171.611 46.6112 164 56 164H140L80.3137 104.314C74.0653 98.0653 74.0653 87.9347 80.3137 81.6863C86.5621 75.4379 96.6927 75.4379 102.941 81.6863L162 140.745V57Z"
            fill={colors.purple["800"]}
          />
        </svg>

        <ProductTitle>QStash</ProductTitle>
      </header>

      <ProductFeature product={Product.QSTASH}>
        <ProductFeatureItem>
          Serverless, HTTP based messaging
        </ProductFeatureItem>
        <ProductFeatureItem>Scheduling via CRON</ProductFeatureItem>
        <ProductFeatureItem>
          At-least-once delivery with auto retries
        </ProductFeatureItem>
      </ProductFeature>

      <div className="mt-auto grid gap-4">
        <Button
          href="https://github.com/upstash/qstash-examples"
          className="hover:bg-purple-100 hover:text-purple-950"
          type="button"
        >
          View examples
        </Button>
        <Button
          href={"/docs/qstash"}
          className="bg-purple-50 text-purple-950 hover:bg-purple-100 hover:text-purple-950"
          type="button"
        >
          Read the docs
        </Button>
      </div>
    </ProductBox>
  );
}
