interface ChildProps {
    color: string;
    clickEvent: () => void;
}

export const Child = ({ color, clickEvent }: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={clickEvent}>Click Me</button>
        </div>
    );
}

// specify that Child is a Function Component, allowing it to use default properties given with FE's
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>;
}