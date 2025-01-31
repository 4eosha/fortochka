function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt="изображение отсутствует"/>
            </div>
            <div className="card-content">
            <span className="card-title" >{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn purple darken-1"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >Купить
                </button>
                <span className="right">{price}</span>
            </div>
        </div >
    );
}

export { GoodsItem };