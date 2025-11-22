import './App.css';
// import Header from './site/Header';
// import Body from './site/Body';
// import Footer from './site/Footer';
// import NewComponent from './NewComponent';
import { useState } from 'react';

function App() {
    // const [students, setStudents] = useState([
    //     { id: 1, name: 'James', age: 8 },
    //     { id: 2, name: 'Robert', age: 18 },
    //     { id: 3, name: 'John', age: 28 },
    //     { id: 4, name: 'Michael', age: 38 },
    //     { id: 5, name: 'William', age: 48 },
    //     { id: 6, name: 'David', age: 58 },
    //     { id: 7, name: 'Richard', age: 68 },
    //     { id: 8, name: 'Joseph', age: 78 },
    //     { id: 9, name: 'Thomas', age: 88 },
    //     { id: 10, name: 'Charles', age: 98 },
    //     { id: 11, name: 'Christopher', age: 100 },
    // ]);

    // const [count, setCount] = useState(0);
    // function onClickHandler() {
    //     setCount(count + 1);
    // }
    // function onClickReset() {
    //     setCount(0);
    // }
    const defaultMonet = [
        { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
        { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
        { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
        { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
        { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
    ];
    const [money, setMoney] = useState(defaultMonet);

    type filterMoneyPropsType = {
        value: string;
    };

    function filterMoney({ value }: filterMoneyPropsType) {
        setMoney(
            money.filter((element) => {
                return element.banknote === value;
            })
        );
    }
    function reset() {
        setMoney(defaultMonet);
    }

    return (
        <>
            {/* <h3>Привет Микротаски</h3>
            <Header title={'New body'} />
            <Body title={'Привет Боди'} />
            <Footer title={'Привет футер'} /> 
            <NewComponent students={students} />*/}
            {/* <h1>{count}</h1>
            <button onClick={onClickHandler}>
                Прибавить <b>1</b>
            </button>
            <button onClick={onClickReset}>Обнулить</button> */}
            <ul>
                {money.map((elemen, index) => {
                    return (
                        <li key={index + 1}>
                            {elemen.banknote} {elemen.nominal} {elemen.number}
                        </li>
                    );
                })}
            </ul>
            <button onClick={reset}>reset</button>

            <button onClick={() => filterMoney({ value: 'dollar' })}>
                dollar
            </button>
            <button onClick={() => filterMoney({ value: 'ruble' })}>
                ruble
            </button>
        </>
    );
}

export default App;
