import './App.css';
// import Header from './site/Header';
// import Body from './site/Body';
// import Footer from './site/Footer';
// import NewComponent from './NewComponent';
//import { useState } from 'react';
import Button from './site/Button';

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
    // const defaultMonet = [
    //     { banknote: 'dollar', nominal: 100, number: ' a1234567890' },
    //     { banknote: 'dollar', nominal: 50, number: ' z1234567890' },
    //     { banknote: 'ruble', nominal: 100, number: ' w1234567890' },
    //     { banknote: 'dollar', nominal: 100, number: ' e1234567890' },
    //     { banknote: 'dollar', nominal: 50, number: ' c1234567890' },
    //     { banknote: 'ruble', nominal: 100, number: ' r1234567890' },
    //     { banknote: 'dollar', nominal: 50, number: ' x1234567890' },
    //     { banknote: 'ruble', nominal: 50, number: ' v1234567890' },
    // ];
    // const [money, setMoney] = useState(defaultMonet);

    // type filterMoneyPropsType = {
    //     value: string;
    // };

    // function filterMoney({ value }: filterMoneyPropsType) {
    //     setMoney(
    //         money.filter((element) => {
    //             return element.banknote === value;
    //         })
    //     );
    // }
    // function reset() {
    //     setMoney(defaultMonet);
    // }

    // function myFirstSubscriber() {
    //     console.log('hello я Вася');
    // }
    // function mySecondSubscriber() {
    //     console.log('hello я Иван');
    // }

    // function onClickHandler(name: string) {
    //     console.log(name);
    // }

    // function foo1() {
    //     console.log('100200');
    // }
    // function foo2(num: number) {
    //     console.log(num);
    // }
    function buttonFoo1(name: string, age: number, adres: string) {
        console.log(name, age, adres);
    }
    function buttonFoo2(name: string, age: number) {
        console.log(name, age);
    }
    function stupidButton() {
        console.log('Я тупая кнопка');
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
            {/* <ul>
                {money.map((element, index) => {
                    return (
                        <li key={index + 1}>
                            {element.banknote} {element.nominal}{' '}
                            {element.number}
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
            </button> */}
            {/* <button
                onClick={() => {
                    console.log('hello');
                }}
            >
                MyYouTubeChanel
            </button>
            <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYouTubeChanel-2</button>
            <button
                onClick={() => {
                    onClickHandler('Вася');
                }}
            >
                MyYouTubeChanel- Вася
            </button>
            <div>
                <button onClick={foo1}>1</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        foo2(100200);
                    }}
                >
                    2
                </button>
            </div> */}
            <div>
                <Button
                    name={'Универсальная кнопка №1'}
                    callBack={() => {
                        buttonFoo1('Васян!', 21, 'Живу в Камбоджи');
                    }}
                />
            </div>
            <div>
                <Button
                    name={'Универсальная кнопка №2'}
                    callBack={() => {
                        buttonFoo2('Ивааан!', 35);
                    }}
                />
            </div>
            <div>
                <Button name={'Тупая кнопка'} callBack={stupidButton} />
            </div>
        </>
    );
}

export default App;
