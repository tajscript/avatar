import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@styles/Contact.module.css";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.contact}
    >
      <div className={Styles.container}>
      <div className={Styles.heading}>
      <>{slice.primary.thanks}</>
      </div>

      <div className={Styles.heading}>
      <PrismicRichText field={slice.primary.contact} />
      </div>

      </div>
      
      <div className={Styles.credit}>
      <>{slice.primary.credit}</>

      <PrismicNextLink field={slice.primary.link} className={Styles.link}>
      <>{slice.primary.linktext}</>
      </PrismicNextLink>
      </div>
      
    </section>
  );
};

export default Contact;
