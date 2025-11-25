import { useState, type ChangeEvent } from 'react';
type FullInputPropsType = {
    callBack: (input: string) => void;
};

function FullInput({ callBack }: FullInputPropsType) {
    const [input, setInput] = useState('');

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.currentTarget.value);
    }

    function onClickButtonHandler() {
        callBack(input);
        setInput('');
    }

    return (
        <div>
            <input value={input} type="text" onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
}

export default FullInput;
