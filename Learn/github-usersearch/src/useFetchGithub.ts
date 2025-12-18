import axios from "axios";
import { useRef, useState } from "react";

const base_url = 'https://api.github.com/search'
const instance = axios.create({
  baseURL: base_url,
  timeout: 1000,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json'
  }
});

export type fetchType = "users" | "repo";
export type dictionary = Record<string, number | string | boolean>

function parseLink(link: string){
  if(!link) return {}
  const all_links = link.split(",")

  const d: dictionary = {}
  for(const l of all_links){
    const li = l.split(";")
    const key = li[1].split("=")[1].replaceAll('"','')
    const value = li[0].replaceAll(RegExp(/[<>]+/g), "")
    
    d[key] = value
  }
  
  return d;
}

export const useFetchGithub = (get: fetchType = 'users') => {
  const [getType, setGetType] = useState<fetchType>(get);
  const [isloading, setLoading] = useState<boolean>(false); 
  const [data, setData] = useState<dictionary[]>([]);
  const [isNext, setNext] = useState<boolean>(false);

  const next_link = useRef<dictionary>({})
  const timeoutRef = useRef<number | null>(null);

  function fetchData(keyword: string){

    if(keyword == "<next>"){
      if('next' in next_link.current){
        setLoading(true);
        const next_url = (next_link.current['next'] as string).replace(base_url, "").trim();
        instance.get(next_url).then((res) => {
          next_link.current = parseLink(res.headers['link'])
          setNext(Object.keys(next_link.current).includes('next'))
          setLoading(false);
          setData(data => data.concat(res.data.items as dictionary[]))
        }).catch(e => {setLoading(false); console.log(e)})
        return
      }
      return
    }
    clearTimeout(timeoutRef.current!)
    
    if(!keyword.length) {
      setData([])
      setNext(false)
      setLoading(false)
      return
    }

    timeoutRef.current = setTimeout(()=>{
      setLoading(true)
      const url = `/${get}?q=${keyword}`;
      instance.get(url).then((res) => {
        next_link.current = parseLink(res.headers['link'])
        setNext(Object.keys(next_link.current).includes('next'))
        setLoading(false)
        setData(res.data.items);
      }).catch(e => {setLoading(false); console.log({e})})
    }, 350)
  }

  return { getType, setGetType, data, fetchData, isloading, isNext};
};
