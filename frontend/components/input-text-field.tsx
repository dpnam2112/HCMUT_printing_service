import { TextField } from "@radix-ui/themes";

type InputTextFieldProps = {
  title: string;
  value: string;
  setValue: (value: string) => void;
};

const InputTextField = ({ title, value, setValue }: InputTextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm ml-[2px]">{title}</span>
      <TextField.Root className="w-full" variant="surface" size={"2"}>
        <TextField.Input
          placeholder={title}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </TextField.Root>
    </div>
  );
};

export default InputTextField;
