import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Logo`.
 */
export type LogoProps = SliceComponentProps<Content.LogoSlice>;

/**
 * Component for "Logo" Slices.
 */
const Logo = ({ slice }: LogoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <PrismicNextImage field={item.images} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Logo;
