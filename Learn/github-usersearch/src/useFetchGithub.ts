import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { User, Repo } from "./interfaces";

const base_url = 'https://api.github.com/search'
const instance = axios.create({
  baseURL: base_url,
  timeout: 15000,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json',
    "Accept": "application/vnd.github+json"
  }
});

export type fetchType = "users" | "repositories";
export type dictionary = Record<string, string>

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
  const [data, setData] = useState<(User | Repo)[]>([]);
  const [isNext, setNext] = useState<boolean>(false);

  const next_link = useRef<dictionary>({})
  const timeoutRef = useRef<number | null>(null);
  const lastKeyword = useRef("");

  const changeGetType = (sgt: fetchType) => {
    setData([]);
    setGetType(sgt);
  }

  function fetchData(keyword: string){
    keyword = keyword.trim();
    if(keyword == "<next>"){
      if('next' in next_link.current){
        setLoading(true);
        const next_url = (next_link.current['next'] as string).replace(base_url, "").trim();
        instance.get(next_url).then((res) => {
          next_link.current = parseLink(res.headers['link'])
          setNext(Object.keys(next_link.current).includes('next'))
          setLoading(false);
          setData(data => data.concat(res.data.items as (typeof data)))
        }).catch(e => {setLoading(false); console.log(e)})
        return
      }
      return
    }
    clearTimeout(timeoutRef.current!)
    
    lastKeyword.current = keyword
    if(!keyword.length) {
      setData([])
      setNext(false)
      setLoading(false)
      return
    }

    timeoutRef.current = setTimeout(()=>{
      setLoading(true)
      const url = `/${getType}?q=${keyword}`;
      instance.get(url).then((res) => {
        console.log({res})
        next_link.current = parseLink(res.headers['link'])
        setNext(Object.keys(next_link.current).includes('next'))
        setLoading(false)
        setData(res.data.items);
      }).catch(e => {setLoading(false); console.log({e})})
    }, 350)
  }

  
  useEffect(()=>{
    fetchData(lastKeyword.current)
  }, [getType])

  return { getType, changeGetType, data, fetchData, isloading, isNext};
};
