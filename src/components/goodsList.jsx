import { GoodsItem } from "./goodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return (
        <div className="goods">
            {goods.slice(20,60).map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    );
}

export { GoodsList };