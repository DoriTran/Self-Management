import { ForwardedRef, forwardRef } from "react";
import TextInput from "./_components/TextInput";

interface ApInputProps {
  type: "date" | "datetime" | "password" | "file" | "image" | "text" | "number";
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  [key: string]: any;
}

const ApInput = forwardRef<HTMLInputElement, ApInputProps>(
  ({ type, value, setValue, onChange, ...restProps }: ApInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    switch (type) {
      // case "date":
      //   return <DateInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "datetime":
      //   return <DateTimeInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "password":
      //   return <PasswordInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "file":
      //   return <FileInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      // case "image":
      //   return <ImageInput ref={ref} value={value} setValue={setValue} onChange={onChange} {...restProps} />;
      default:
        return (
          <TextInput ref={ref} type={type} value={value} setValue={setValue} onChange={onChange} {...restProps} />
        );
    }
  },
);

ApInput.displayName = "ApInput";
export default ApInput;
