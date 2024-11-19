import { mockNews } from "@/mockData/mockNews"
import { Inews } from "./interfaces/news"

export const getNewsYear = ():string[] =>{
    return mockNews.reduce((years:string[],news)=>{
        return !(years.includes(news.date.split('-')[0])) ? [...years, news.date.split('-')[0]]:years
    },[])
}

export const getNewsByYear = (year:string):Inews[] =>{
    return mockNews.filter((news)=>news.date.split('-')[0]===year)
}

export const getLatestNews = ():Inews[] =>{
    return mockNews.slice(0,3);
}