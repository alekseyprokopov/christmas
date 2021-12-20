import noActive from './noActive'
import filter from './filter'
import defaultConfig from './defaultConfig'
import {API, target,TargetElement} from 'nouislider';


export default function (config, defaultArray){
    let defaults = JSON.parse(JSON.stringify(defaultConfig))
    const sliders = document.querySelectorAll('.number-slider, .year-slider')

    Object.assign(config.category,defaults.category)
    filter(defaultArray, config)
    sliders.forEach((item,index)=>{
        if (index===0) (item as target).noUiSlider.set([config.category.numberStart ,config.category.numberEnd])
        if (index===1) (item as target).noUiSlider.set([config.category.yearStart ,config.category.yearEnd])
    })

    noActive(config)
}
