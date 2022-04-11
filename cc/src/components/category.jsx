import "./category.css";
function Category({imageUrl,title}){
    return (
        <div class="item">
            <img src={imageUrl} alt="" />
            <b>{title}</b>
        </div>
    )
}
export {Category}