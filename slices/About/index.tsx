import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@styles/About.module.css";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.about}
    >
      <div className={Styles.container}>
      <div className={Styles.heading}>
      <PrismicRichText field={slice.primary.heading} />
      </div>
      <div className={Styles.description}>
      <>{slice.primary.descriptiontext}</>
      </div>
      </div>
    </section>
  );
};

export default About;
