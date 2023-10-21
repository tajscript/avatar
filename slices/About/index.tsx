"use client"

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import Styles from "@styles/About.module.css";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  const aboutRef = useRef<HTMLDivElement | null>();

  useLayoutEffect(() => {

    let about = gsap.context(() => {
      gsap.to(aboutRef.current, {
        ease: "none",
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: aboutRef.current,
          endTrigger: "#logos",
          start: "top top",
          end: "top top",
          pin: true,
          pinSpacing: false,
          toggleActions: 'play reverse play reverse',
          scrub: 2
      }
      })
    })

    return () => {
        about.revert();
    }

    }, [])

  return (
    <section
      ref={aboutRef}
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
