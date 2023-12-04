import { TextField } from "@radix-ui/themes";

type InputNumberFieldProps = {
  title: string;
  value: number;
  setValue: (value: number) => void;
};

const InputNumberField = ({
  title,
  value,
  setValue,
}: InputNumberFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-sm ml-[2px]">{title}</span>
      <TextField.Root className="w-full" variant="surface" size={"2"}>
        <TextField.Input
          placeholder={title}
          value={value}
          type="number"
          onChange={(e) => {
            setValue(Number(e.target.value));
          }}
        />
      </TextField.Root>
    </div>
  );
};

export default InputNumberField;
