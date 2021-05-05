import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
} from "@chakra-ui/react";
import { isValidMotionProp, motion, MotionProps } from "framer-motion";
import React from "react";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion.custom(
  forwardRef<MotionBoxProps, "div">((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <chakra.div ref={ref} {...chakraProps} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;
