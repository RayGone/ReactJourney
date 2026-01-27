
export function scrollToElement(elem_id: string){
  if(!!!elem_id) return;
  const elems = document.querySelectorAll(elem_id);
  for(const el of elems){
    if (!(el instanceof HTMLElement)) {
        throw new Error("Invalid element provided");
    }
    if(el.offsetParent != null){
      el.scrollIntoView({behavior: "smooth"})
    }
  }
}