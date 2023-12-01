import { Child } from './Child';

const Parent = () => {
    return <Child color="red" clickEvent={() => console.log('clicked!') } />
};

export default Parent;