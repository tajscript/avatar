import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Art`.
 */
export type ArtProps = SliceComponentProps<Content.ArtSlice>;

/**
 * Component for "Art" Slices.
 */
const Art = ({ slice }: ArtProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

   <div>
    {slice.items.map((item, index) => (
      <div key={index}>
        <>{item.number}</>
        <PrismicNextImage field={item.image} />
      </div>
  ))}
</div>
    </section>
  );
};

export default Art;
