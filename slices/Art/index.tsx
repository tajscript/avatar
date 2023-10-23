"use client"

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import Styles from "@styles/Art.module.css"

/**
 * Props for `Art`.
 */
export type ArtProps = SliceComponentProps<Content.ArtSlice>;

/**
 * Component for "Art" Slices.
 */
const Art = ({ slice }: ArtProps): JSX.Element => {
  const artRef = useRef<HTMLDivElement | null>();
  const artTextRef = useRef<HTMLDivElement | null>();

  useLayoutEffect(() => {

    let art = gsap.context(() => {

      gsap.from(artTextRef.current, {
        ease: "power3.in",
        duration: 1.5,
        delay: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: artRef.current,
          start: "top 25%",
          end: "top top",
          scrub: 2
      }
      })
    })

    return () => {
        art.revert();
    }

    }, [])

  return (
    <section
      ref={artRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.art}
    >
      <div className={Styles.heading} ref={artTextRef}>
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
