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

    const [count, setCount] = useState(0);
    function onClickHandler() {
        setCount(count + 1);
    }
    function onClickReset() {
        setCount(0);
    }

    return (
        <>
            {/* <h3>Привет Микротаски</h3>
            <Header title={'New body'} />
            <Body title={'Привет Боди'} />
            <Footer title={'Привет футер'} /> 
            <NewComponent students={students} />*/}
            <h1>{count}</h1>
            <button onClick={onClickHandler}>
                Прибавить <b>1</b>
            </button>
            <button onClick={onClickReset}>Обнулить</button>
        </>
    );
}

export default App;
