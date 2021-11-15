import Dropdown from './components/Dropdown';
import Items from './components/Items';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <main>
            <h1>Spending Tracker</h1>
            <Dropdown />
            <Items />
        </main>
    );
}

export default App;
