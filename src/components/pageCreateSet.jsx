import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function PageCreateSet() {
    return <div>
        <Header/>
        <h2>Создание сета на карточке</h2>
        <Outlet/>
    </div>;
}