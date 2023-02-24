type RangeInputProps = {
    name: string;
    min: string | number;
    max: string | number;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    style: React.CSSProperties | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    step?: string;
    className?: string;
    width?: string;
    value?: number | undefined;
};

const RangeInput = (props: RangeInputProps) => {
    return (
        <input
            className={`${props.width} slider ${props.className}`}
            name={props.name}
            type="range"
            min={props.min}
            max={props.max}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            style={props.style}
            step={props.step}
            value={props.value}
        />
    );
};

export default RangeInput;
