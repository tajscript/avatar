"use client"

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import Styles from "@styles/Logo.module.css"
/**
 * Props for `Logo`.
 */
export type LogoProps = SliceComponentProps<Content.LogoSlice>;

/**
 * Component for "Logo" Slices.
 */
const Logo = ({ slice }: LogoProps): JSX.Element => {
  const logoRef = useRef<HTMLDivElement | null>();
  const logoTextRef = useRef<HTMLDivElement | null>();

  useLayoutEffect(() => {

    let logo = gsap.context(() => {

      gsap.from(logoTextRef.current, {
        ease: "power3.in",
        duration: 1.5,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 25%",
          end: "top top",
          scrub: 2
      }
      })
    })

    return () => {
        logo.revert();
    }

    }, [])


  return (
    <section
      ref={logoRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.logo}
      id="logos"
    >
      <div className={Styles.logo__wrapper}>
      <div className={Styles.heading} ref={logoTextRef}>
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
