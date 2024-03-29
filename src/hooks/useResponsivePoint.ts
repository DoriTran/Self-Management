import { themes } from "@/utils/themes";
import useWindowSize from "./useWindowSize";

export type ResponsivePoint = "phone" | "tablet" | "desktop" | "screen" | "extra";
export type ResponsivePointHook = {
  responsivePoint: ResponsivePoint;
  isSmaller: (point: ResponsivePoint) => boolean;
  isLarger: (point: ResponsivePoint) => boolean;
  is: (point: ResponsivePoint) => boolean;
};

export default function useResponsivePoint(): ResponsivePointHook {
  const { width: screenWidth } = useWindowSize();

  const isSmaller = (point: ResponsivePoint): boolean => screenWidth < themes.breakpoints[point];
  const isLarger = (point: ResponsivePoint): boolean => screenWidth > themes.breakpoints[point];
  const is = (point: ResponsivePoint): boolean => screenWidth === themes.breakpoints[point];

  let responsivePoint: ResponsivePoint = "extra";
  if (screenWidth <= themes.breakpoints.screen) responsivePoint = "screen";
  if (screenWidth <= themes.breakpoints.desktop) responsivePoint = "desktop";
  if (screenWidth <= themes.breakpoints.tablet) responsivePoint = "tablet";
  if (screenWidth <= themes.breakpoints.phone) responsivePoint = "phone";

  return { responsivePoint, isSmaller, isLarger, is };
}
