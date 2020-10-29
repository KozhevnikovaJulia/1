import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    // add paths
}

function Routes() {
    let PRE_JUNIOR ="/preJunior"
    let JUNIOR = "/junior"
    let JUNIOR_PLUS = "/juniorPlus"
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route exact path="/"  render={() => <Redirect to={PRE_JUNIOR}/>}/>
            <Route exact path={PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route exact path={JUNIOR}  render={() => <Junior/>}/>
            <Route exact path={JUNIOR_PLUS}  render={() => <JuniorPlus/>}/>
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;

