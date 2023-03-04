import '../css/base.css';

type BaseProps = {
    children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => {
    return (
        <div className="default-bg default-text w-full min-h-screen h-full">
            {children}
        </div>
    );
};

export default Base;
