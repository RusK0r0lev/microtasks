import { useState, type ChangeEvent } from 'react';
import Button from './Button';
type InputPropsType = {
    addMessage: (input: string) => void;
};

function Input({ addMessage }: InputPropsType) {
    const [input, setInput] = useState('');

    function onChangeInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.currentTarget.value);
    }

    function onClickButtonHandler() {
        addMessage(input);
        setInput('');
    }

    return (
        <div>
            <input value={input} type="text" onChange={onChangeInputHandler} />
            <Button name={'+'} callBack={onClickButtonHandler} />
        </div>
    );
}

export default Input;
