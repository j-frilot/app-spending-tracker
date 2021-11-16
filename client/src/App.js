import Dropdown from './components/Dropdown';
import Items from './components/Items';
// import AddItem from './components/AddItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <Container>
            <h1>Spending Tracker</h1>
            <Dropdown />
            <Items />
        </Container>
    );
}

export default App;
