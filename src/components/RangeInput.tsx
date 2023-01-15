const RangeInput = (props: {
    name: string;
    min: string;
    max: string;
    defaultValue: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    style: React.CSSProperties | undefined;
    step?: string;
}) => {
    return (
        <input
            className="slider"
            name={props.name}
            type="range"
            min={props.min}
            max={props.max}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            style={props.style}
            step={props.step}
        />
    );
};

export default RangeInput;
