import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Work`.
 */
export type WorkProps = SliceComponentProps<Content.WorkSlice>;

/**
 * Component for "Work" Slices.
 */
const Work = ({ slice }: WorkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.title}</>
            <>{item.description}</>
            <PrismicNextImage field={item.image1} />
            <PrismicNextImage field={item.image2} />
            <PrismicNextImage field={item.image3} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
