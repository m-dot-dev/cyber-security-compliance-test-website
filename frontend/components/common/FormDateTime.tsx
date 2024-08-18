import { cn } from "@/lib/utils";
import React, { useId } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormDateTime = ({
  form,
  name,
  className,
  labelClassName,
  component,
  placeHolder,
  label,
  min,
  max,
  disabled,
  onChange,
}: {
  form: any;
  name: string;
  className?: string;
  labelClassName?: string;
  placeHolder?: string;
  label: string;
  component?: React.ReactNode;
  min?: any;
  max?: any;
  disabled?: boolean;
  onChange?: any;
}) => {
  const id = useId();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel htmlFor={id} className={labelClassName || "font-semibold"}>
            {label}
          </FormLabel>
          <FormControl>
            {component ? (
              React.cloneElement(component as React.ReactElement, {
                ...field,
                id,
              })
            ) : (
              <div className="relative">
                <Input
                  id={id}
                  disabled={disabled}
                  className={cn(
                    "bg-white placeholder:text-black placeholder:opacity-50",
                    className
                  )}
                  type="datetime-local"
                  onChange={
                    onChange
                      ? (e) => {
                          onChange(e.target.value);
                          field.onChange(e);
                        }
                      : field.onChange
                  }
                  value={field.value}
                  min={min}
                  max={max}
                  placeholder={placeHolder}

                  // {...field}
                />
              </div>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDateTime;
