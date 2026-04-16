export function FormCreateSet() {
    return (
        <form class="form" action="">
            <label htmlFor="">
                Название <br/>
                <input type="text" name="name" />
            </label>
            <label>
                Описание:<br/>
                <textarea name="discription" id="" cols="30" rows="10"></textarea>
            </label>
            <input className="siteButton" type="submit" value='Создать сет' />
        </form>
    );
}
