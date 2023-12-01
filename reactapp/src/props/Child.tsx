interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
}

// specify that Child is a Function Component, allowing it to use default properties given with FE's
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>;
}