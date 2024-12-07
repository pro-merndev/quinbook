import { cn } from "@/lib/utils";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  selectOptions?: { value: string; label: string }[];
  control: any;
}

const RHFInputField = ({ name, label, placeholder, type = "text", selectOptions, control }: IProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <Label className="text-grey-darker">{label}</Label>
          {selectOptions ? (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className={cn("w-full", error && "border-red-500 focus:border-red-500")}>
                <SelectValue placeholder={placeholder || `Select ${label.toLowerCase()}`} />
              </SelectTrigger>
              <SelectContent>
                {selectOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <Input
              placeholder={placeholder || label}
              type={type}
              className={cn("w-full", error && "border-red-500 focus:border-red-500")}
              {...field}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    />
  );
};

export default RHFInputField;
