import { Link } from "react-router-dom";

export function NotFound(){
    return <div className="">
        <h1>К сожалению страница не найдена. Вернуться на <Link to="/">главную</Link> страницу</h1>
    </div>
}