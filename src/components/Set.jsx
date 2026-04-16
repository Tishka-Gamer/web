import { use, useState } from "react";
import { Card } from "./Card";
import data from "../data.json";
import { useLocation, useParams } from "react-router-dom";
import './Set.css';


export function Set() {
    const location = useLocation()
    const set = location.state.set
    const cards = data.filter((item)=>(item.setName === set));
    const param = useParams();
    console.log(param.id);

    const [step, setStep] = useState(0);
    
    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };
    
    const handleNext = () => {
        if (step < cards.length - 1) {
            setStep(step + 1);
        }
    };

    return (
        <div>
            <h2>Название набора</h2>
            <Card key={cards[step].id}  front={cards[step].front} back={cards[step].back}/>
            <div>элементы управления</div>
            <div className="elements">
                <span className="elem prev" onClick={handlePrev}>←</span>
                <span className="elem-text">{step + 1} / {cards.length}</span>
                <span className="elem next" onClick={handleNext}>→</span>
            </div>
        </div>
    );
}