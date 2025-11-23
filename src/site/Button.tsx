type ButtonTypeProps = {
    name: string;
    callBack: () => void;
};
function Button({ name, callBack }: ButtonTypeProps) {
    function onClickHandler() {
        callBack();
    }
    return <button onClick={onClickHandler}>{name}</button>;
}

export default Button;
