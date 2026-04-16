export function FormCreateCard() {
    return (
        <form action="" className="form">
            <label htmlFor="">Передняя сторона карточки: <input type="text" name="fronttext" /></label>
            <label htmlFor="">Задняя сторона карточки: <input type="text" name="backtext" /></label>
            <input className="siteButton" type="submit" value='Создать карточку' />
        </form>
    )
}