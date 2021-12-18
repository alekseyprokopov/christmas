export default function (array, config){
    const categories = config.category
    const parent = document.querySelector('.toy-card-container');

    let filterArray = array.filter((item, index)=>{

        const yearFilter = (item.dataset.year >= config.category.yearStart) && (item.dataset.year <= config.category.yearEnd)

        const numberFilter = (item.dataset.number >= config.category.numberStart) && (item.dataset.number <= config.category.numberEnd)
        const favoriteFilter =  !config.category.favorite? (item.dataset.favorite === 'true'? true: false): true;

        const shapeFilter = config.category.shape[item.dataset.shape]

        const colorFilter = config.category.color[item.dataset.color]

        const sizeFilter = config.category.size[item.dataset.size]

        return yearFilter && numberFilter && shapeFilter && colorFilter && sizeFilter && favoriteFilter
    })
        parent!.innerHTML = '';
        filterArray.forEach(item=> parent?.appendChild(item))
}



