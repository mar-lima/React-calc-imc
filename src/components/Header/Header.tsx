import React from "react";
import "./style.css";


//assim se cria uma prop
type Props = {
    title?: string;
    subTitle?: string;
};

const Header = ({ title, subTitle }: Props) => {
    return (
        <div>
            <hr />
            <h1>{ title }</h1>
            <h2>{ subTitle }</h2>
            <hr />
        </div>
    );
};

export default Header;
