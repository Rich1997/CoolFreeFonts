import '../css/rose.css';

type RoseProps = {
    children: React.ReactNode;
};

const Rose = ({ children }: RoseProps) => {
    return (
        <div className="default-bg default-text w-full min-h-screen h-full">
            {children}
        </div>
    );
};

export default Rose;
