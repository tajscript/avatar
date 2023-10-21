

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@styles/Art.module.css"

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
      className={Styles.art}
    >
      <div className={Styles.heading}>
      <PrismicRichText field={slice.primary.heading} />
      </div>

    <div className={Styles.art__wrapper}>
      {slice.items.map((item, index) => (
      <div key={index} className={Styles.wrapper}>
        <div className={Styles.title}>
        <>{item.number}</>
        </div>
        
        <div className={Styles.image__wrapper}>
        <PrismicNextImage field={item.image} className={Styles.image} />
        <div className={Styles.image__border}></div>
        </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Art;
