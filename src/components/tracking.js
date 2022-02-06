import ReactGA from "react-ga"; 

export const initGA = (id)=>{
    ReactGA.initialize(id);
}

export const pageView = ()=>{
    ReactGA.pageview(window.location.pathname+window.location.search);
}