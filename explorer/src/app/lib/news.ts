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
export const getNewsByMonths = (year:string, month:string):Inews[]=>{
    return mockNews.filter((news)=>news.date.split('-')[0]===year && news.date.split('-')[1]===month);
}

export const getLatestNews = ():Inews[] =>{
    return mockNews.slice(0,3);
}

export const getMonthsForYear =(year:string):string[] =>{
    const newsByYear = getNewsByYear(year);
    return newsByYear.reduce((months:string[], news)=>{
        return !(months.includes(news.date.split('-')[1])) ? [...months, news.date.split('-')[1]]:months;
    },[])
}