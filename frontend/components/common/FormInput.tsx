'use client';
import { Eye, EyeOff } from "lucide-react";
import React, { useId, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const FormInput = ({
  form,
  name,
  className,
  labelClassName,
  component,
  placeHolder,
  label,
  type = "text",
  min,
  max,
  disabled,
}: {
  form: any;
  name: string;
  className?: string;
  labelClassName?: string;
  placeHolder?: string;
  label: string;
  type?: string;
  component?: React.ReactNode;
  min?: any;
  max?: any;
  disabled?: boolean;
}) => {
  const [hidePassword, setHidePassword] = useState(type === "password");
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
                autoComplete: type,
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
                  type={
                    hidePassword
                      ? "password"
                      : type !== "password"
                      ? type
                      : "text"
                  }
                  onChange={
                    type === "number"
                      ? (e) => {
                          const value = e.target.value;
                          if (value === "") {
                            field.onChange(undefined);
                          } else {
                            field.onChange(parseInt(value));
                          }
                        }
                      : field.onChange
                  }
                  value={field.value}
                  min={min}
                  max={max}
                  placeholder={placeHolder}
                  autoComplete={type}
                  // {...field}
                />
                {type === "password" && hidePassword && (
                  <Eye
                    className="h-5 w-6 absolute right-3 top-2.5 cursor-pointer"
                    onClick={() => {
                      setHidePassword((prev) => !prev);
                    }}
                  />
                )}
                {type === "password" && !hidePassword && (
                  <EyeOff
                    className="h-5 w-6 absolute right-3 top-2.5 cursor-pointer"
                    onClick={() => {
                      setHidePassword((prev) => !prev);
                    }}
                  />
                )}
              </div>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
