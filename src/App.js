import './App.css';
import TopLine from "./components/TopLine/TopLine";
import ChoiceFlat from "./components/ChoiceFlat/ChoiceFlat";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import showBigFlatItem from "./components/showBigFlatItem/ShowBigFlatItem";

function App() {
    return (
        <BrowserRouter>
        <div className="App">
            <TopLine />
            <Switch>
                {/*<Route exact path="/" render={withSuspense(ProfileContainer)}/>*/}
                {/*<Redirect exact from="/" to="/profile?" />*/}
                <Route exact path="/" component={ChoiceFlat}/>
                <Route exact path="/flat/:flatId" component={showBigFlatItem}/>
            </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
