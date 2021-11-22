type BreakpointSizesType = {
  min: string;
  max: string;
};

type BreakpointType = {
  desktop: BreakpointSizesType;
  desktopSmall: BreakpointSizesType;
  tablet: BreakpointSizesType;
  mobile: BreakpointSizesType;
};

export default BreakpointType;
