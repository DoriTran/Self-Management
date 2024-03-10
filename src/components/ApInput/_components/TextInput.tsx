import { InputAdornment, TextField, TextFieldVariants } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import styles from "./TextInput.module.scss";

interface TextInputProps {
  type: string;

  // Basic input logic
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;

  // Custom input event
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;
  onEnter?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;
  onEsc?: (event: React.KeyboardEventHandler<HTMLInputElement>) => void;

  // Input accessory
  variant?: TextFieldVariants;
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;

  // Styling properties

  // The rest properties
  [key: string]: any;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      type,
      value,
      setValue,
      onChange,
      onEnter,
      onEsc,
      onKeyDown,
      variant = "standard",
      startAdornment,
      endAdornment,
      ...restProps
    }: TextInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const handleKeyDown = (event: any) => {
      onKeyDown?.(event);
      if (onEnter && event.key === "Enter") {
        event.preventDefault();
        if (event.shiftKey) setValue(`${value}\n`);
        else onEnter?.(event);
      } else if (onEsc && event.key === "Escape") {
        onEsc?.(event);
      }
    };

    return (
      <TextField
        type={type}
        inputRef={ref}
        variant={variant}
        inputProps={{
          className: styles.input,
        }}
        InputProps={{
          className: styles.Input,
          startAdornment: startAdornment && <InputAdornment position="start">{startAdornment}</InputAdornment>,
          endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
        }}
        onChange={onChange || ((event) => setValue(event.target.value))}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        {...restProps}
      />
    );
  },
);

TextInput.displayName = "TextInput";
export default TextInput;
