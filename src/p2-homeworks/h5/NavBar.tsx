import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import s from "./HW5.module.css";
import {NavLink} from "react-router-dom";


export default function NavBar() {
    const [state, setState] = React.useState(false);

    return (
        <div>
                <React.Fragment >
                    <Button onClick={() => setState(true)}>Menu</Button>
                    <Drawer anchor={'left'} open={state} onClose={() => setState(false)}>
                        <div className={s.item}>
                            <NavLink to="/preJunior" activeClassName={s.active} >PreJunior</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/junior" activeClassName={s.active}>Junior</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to="/juniorPlus" activeClassName={s.active}>JuniorPlus</NavLink>
                        </div>
                    </Drawer>
                </React.Fragment>
        </div>
    );
}



