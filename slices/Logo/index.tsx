import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@styles/Logo.module.css"
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
      className={Styles.logo}
      id="logos"
    >
      <div className={Styles.logo__wrapper}>
      <div className={Styles.heading}>
      <PrismicRichText field={slice.primary.heading} />
      </div>

      <div className={Styles.container}>
        {slice.items.map((item, index) => (
          <div className={Styles.wrapper} key={index}>
            <PrismicNextImage field={item.images} />
          </div>
        ))}
      </div>

      </div>

    </section>
  );
};

export default Logo;
