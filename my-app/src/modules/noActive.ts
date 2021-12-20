import {API, target,TargetElement} from 'nouislider';

export default function (config){
    let colors = config.category.color
    let shapes = config.category.shape
    const sliders = document.querySelectorAll('.number-slider, .year-slider')

    let noActiveItems = document?.querySelectorAll('.form-item, .color-item, .favorite, .size-item');
    noActiveItems.forEach(item=>{
        if ((item as HTMLElement).dataset.name){
            let shape = (item as HTMLElement).dataset.name as string
            !config.category.shape[shape]? item.classList.add('no-active'): item.classList.remove('no-active')
        }
        if ((item as HTMLElement).classList.contains('color-item')){
            let color = (item as HTMLElement).dataset.color as string
            !config.category.color[color]? item.classList.add('no-active'): item.classList.remove('no-active')
        }
        if ((item as HTMLInputElement).classList.contains('size-item')){
            let size = (item as HTMLElement).dataset.size as string;
            !config.category.size[size]? item.classList.add('no-active'): item.classList.remove('no-active');
            (item.firstElementChild as HTMLInputElement).checked = config.category.size[size];
        }
    })

    sliders.forEach((item,index)=>{
        if (index===0) (item as target).noUiSlider.set([config.category.numberStart ,config.category.numberEnd])
        if (index===1) (item as target).noUiSlider.set([config.category.yearStart ,config.category.yearEnd])
    })

}