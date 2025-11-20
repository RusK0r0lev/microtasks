import './App.css';
import Header from './site/Header';
import Body from './site/Body';
import Footer from './site/Footer';
function App() {
    return (
        <>
            <h3>Привет Микротаски</h3>
            <Header title={'New body'} />
            <Body title={'Привет Боди'} />
            <Footer title={'Привет футер'} />
        </>
    );
}

export default App;
