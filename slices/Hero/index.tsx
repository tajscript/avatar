import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Styles from "@styles/Hero.module.css";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.hero}
    >

      <div className={Styles.hero__cont}>
      <div className={Styles.wrapper}>
      <div className={Styles.text}>
        <PrismicRichText field={slice.primary.heading} 
        components={{
          heading1: ({children}) => <h2 className={Styles.heading}>{children}</h2>
        }}
        />
      </div>

      <div className={Styles.images}>
        <div className={Styles.image__left}>
        <PrismicNextImage field={slice.primary.mobileimage} className={Styles.image} />
        </div>

        <div className={Styles.image__right}>
        <PrismicNextImage field={slice.primary.desktopimage} className={Styles.image} />
        </div>
      </div>
      </div>

      <div className={Styles.line} />

      <div className={Styles.skill}>
        <div className={Styles.title}>
          <>{slice.primary.skilltext}</>
        </div>
      <PrismicRichText field={slice.primary.skilldescription} 
      components={{
        paragraph: ({children}) => <p className={Styles.paragraph}>{children}</p>
      }}
      />
      </div>

      </div>
    </section>
  );
};

export default Hero;