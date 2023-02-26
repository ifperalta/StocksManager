/**
 *  Handles all the data set for the portfolio
 */
import axios from "axios";
import canstocks from "../data/all.json";
import communication from "../data/Communication.json";
import consumerdiscretionary from "../data/ConsumerDiscretionary.json";
import consumerstaples from "../data/ConsumerStaples.json";
import energy from "../data/Energy.json";
import financials from "../data/Financial.json";
import healthcare from "../data/HealthCare.json";
import industry from "../data/Industry.json";
import materials from "../data/Materials.json";
import realestate from "../data/Realestate.json";
import technology from "../data/Technology.json";
import utilities from "../data/Utilities.json";
import config from "../config.json";

export function data(ticker){
    let value = "";
    
    if(ticker === "all"){
        value = canstocks;

    }else if(ticker === "Communication"){
        value = communication;
    
    }else if(ticker === "ConsumerDiscretionary"){
        value = consumerdiscretionary;

    }else if(ticker === "ConsumerStaples"){
        value = consumerstaples;

    }else if(ticker === "Energy"){
        value = energy;

    }else if(ticker === "Financial"){
        value = financials;

    }else if(ticker === "HealthCare"){
        value = healthcare;
    
    }else if(ticker === "Industry"){
        value = industry;
    
    }else if(ticker === "Materials"){
        value = materials;
    
    }else if(ticker === "Realestate"){
        value = realestate;
    
    }else if(ticker === "Technology"){
        value = technology;
    
    }else if(ticker === "Utilities"){
        value = utilities;
    }

    return value;
}

export function loadtickers(stocks, symbol){
    let filtered = stocks.filter(val => val.Symbol.toUpperCase() == symbol.toUpperCase());
    return filtered;
}

export function searchticker(stocks, symbols){
    let search = stocks.filter(val => val.Symbol.toUpperCase() == symbols.toUpperCase());
    return search;
}

export function getAllPortfolios(){
    return axios.get(config.apiUrl + '/portfolio');
}

// get all data for portfolio lists
export function getAllPortfolioLists(stk_uid){
    return axios.get(config.apiUrl + '/portfoliolist/' + stk_uid);
}