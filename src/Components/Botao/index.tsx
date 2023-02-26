import React, { ReactNode } from "react";
import style from  './Botao.module.scss';

class Botao extends React.Component <{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
    children?:  ReactNode | undefined 
}> {
    render() {
        const{type ="button", onClick} = this.props;
        return (
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}
export default Botao;