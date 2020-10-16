import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    // add paths
}

function Routes() {
    let PRE_JUNIOR ="/preJunior"
    let JUNIOR = "/junior"
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route exact path="/"  render={() => <Redirect to={PRE_JUNIOR}/>}/>
            <Route exact path={JUNIOR}  render={() => <Redirect to={JUNIOR}/>}/>
            <Route path={PRE_JUNIOR} render={() => <PreJunior/>}/>


            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
