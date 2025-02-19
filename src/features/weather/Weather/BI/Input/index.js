import { StyledInput } from "./styled";

const Imput = ({ value, onChange, placeholder }) => {
    return <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
};

export default Imput;