import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      <>{slice.primary.thanks}</>
      <>{slice.primary.contact}</>
      <>{slice.primary.details}</>
      <>{slice.primary.credit}</>
      <PrismicNextLink field={slice.primary.link}>
      <>{slice.primary.linktext}</>
      </PrismicNextLink>
      
    </section>
  );
};

export default Contact;
