import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@styles/Work.module.css"

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
      className={Styles.work}
    >
      <div className={Styles.heading}>
      <PrismicRichText field={slice.primary.heading} />
      </div>

      <div className={Styles.container}>
        {slice.items.map((item, index) => (
          <div key={index} className={Styles.wrapper}>
            <div className={Styles.title__wrapper}>
            <div className={Styles.title}>
            <>{item.title}</>
            </div>

            <div className={Styles.paragraph}>
            <>{item.description}</>
            </div>
            </div>

            <div className={Styles.images}>
            <div className={Styles.image__container}>

            <PrismicNextImage field={item.image1} className={Styles.image}/>
            <PrismicNextImage field={item.image2} className={Styles.image}/>
            <PrismicNextImage field={item.image3} className={Styles.image}/>

            </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
