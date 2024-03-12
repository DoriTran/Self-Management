import { ForwardedRef, forwardRef } from "react";
import ClassNameProps from "./_interface/ClassNameProps";
import LabelWrapper from "./_components/LabelWrapper/LabelWrapper";
import Input from "./Input";
import AdornmentWrapper from "./_components/AdornmentWrapper/AdornmentWrapper";
import { AdornmentProps } from "./_components/AdornmentWrapper/Adornment";

interface StyleProps {
  labelStyle?: object;
  startAdornmentStyle?: object;
  endAdornmentStyle?: object;
  [key: string]: any;
}

interface ApInputProps {
  // Label properties
  label?: string;
  // Adornment properties
  startAdornment?: AdornmentProps;
  endAdornment?: AdornmentProps;
  // Style properties
  style?: StyleProps;
  className?: string | ClassNameProps;
  // Rest properties
  [key: string]: any;
}

const ApInput = forwardRef<HTMLInputElement, ApInputProps>(
  (
    { label, startAdornment, endAdornment, style, className, ...restProps }: ApInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <LabelWrapper label={label} style={style?.label} {...(typeof className === "object" && { className })}>
        <AdornmentWrapper
          startAdornment={startAdornment}
          startAdornmentStyle={style?.startAdornmentStyle}
          endAdornment={endAdornment}
          endAdornmentStyle={style?.endAdornmentStyle}
          {...(typeof className === "object" && { className })}
        >
          <Input
            ref={ref}
            startAdornment={startAdornment !== undefined}
            endAdornment={endAdornment !== undefined}
            {...restProps}
          />
        </AdornmentWrapper>
      </LabelWrapper>
    );
  },
);
ApInput.displayName = "ApInput";

export default ApInput;
