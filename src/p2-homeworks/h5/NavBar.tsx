import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import s from "./HW5.module.css";
import {NavLink} from "react-router-dom";
import {PRE_JUNIOR, JUNIOR, JUNIOR_PLUS} from "./Routes";

export default function NavBar() {
    const [state, setState] = React.useState(false);

    return (
        <div>
                <React.Fragment >
                    <Button onClick={() => setState(true)}>Menu</Button>
                    <Drawer anchor={'left'} open={state} onClose={() => setState(false)}>
                        <div className={s.item}>
                            <NavLink to = {PRE_JUNIOR} activeClassName={s.active} >PreJunior</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to={JUNIOR} activeClassName={s.active}>Junior</NavLink>
                        </div>
                        <div className={s.item}>
                            <NavLink to={JUNIOR_PLUS} activeClassName={s.active}>JuniorPlus</NavLink>
                        </div>
                    </Drawer>
                </React.Fragment>
        </div>
    );
}



