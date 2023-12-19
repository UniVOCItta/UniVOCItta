function isValidForFilter(element){
    return (element!==null && element!==undefined && element!=="Data" &&  element.toString().trim().length>0)
}

export function cleanCityName(element,full=false){
    if(element===null || element===undefined){
        return element;
    }
    const first_pos= element.indexOf("(");
    if(first_pos>-1 && element.indexOf(")")>first_pos){
        const temp1= element.split("(")
        const name = temp1[0].toString().trim();
        if(full){
            const temp2 = temp1[1].split(",")
            const lat=Number(temp2[0]);
            const lng=Number(temp2[1].replaceAll(")",""));
            return {name,lat,lng}
        }else{
            return name;
        }
      
    }else{
        if(full){
            return {name:element.toString().trim(),lat:null,lng:null}
        }else{
            return element.toString().trim()
        }
    }
}

function transformToorderedArray(hashmap){
   return Object.keys(hashmap).sort()
}

export function generateFilters(database){
    const filters ={
        place:{},
        autore:{}, //<---author
        period:{},
        experience:{},
        character:{},
        artist:{},
        city:{},
        nature:{},
        topic:{},//<--- theme
        artwork:{},
        language:{}
        // city_pos:{},
        // place_pos:{}
    }
    const arrayFields=[
        "autore",
        "period",
        "experience",
        "character",
        "artist",
        "nature",
        "topic",
        "artwork",
    ]
    for(let x=0;x<database.length;x++){
        if(isValidForFilter(database[x].place)){
            for(let y=0;y<database[x].place.length;y++){
                if(isValidForFilter(database[x].place[y])){
                    const name= cleanCityName(database[x].place[y]);
                    filters.place[name]=true;
                }    
            }
         }     
        for(let f=0;f<arrayFields.length;f++){
            for(let y=0;y<database[x][arrayFields[f]].length;y++){
                if(isValidForFilter(database[x][arrayFields[f]][y])){
                    filters[arrayFields[f]][database[x][arrayFields[f]][y]]=true;
                }    
            }
        }
        if(isValidForFilter(database[x].city)){
           const name= cleanCityName(database[x].city);
           filters.city[name]=true;
        }   
        if(isValidForFilter(database[x].language)){
            filters.language[database[x].language]=true;
         }           
    }
    filters.place=transformToorderedArray(filters.place);
    filters.author=transformToorderedArray(filters.autore);
    delete(filters.autore)
    filters.period=transformToorderedArray(filters.period);
    filters.experience=transformToorderedArray(filters.experience);
    filters.character=transformToorderedArray(filters.character);
    filters.artist=transformToorderedArray(filters.artist);
    filters.city=transformToorderedArray(filters.city);
    filters.nature=transformToorderedArray(filters.nature);
    filters.theme=transformToorderedArray(filters.topic);
    delete(filters.topic)
    filters.artwork=transformToorderedArray(filters.artwork);  
    filters.language=transformToorderedArray(filters.language);     
    return filters;
}


export function getPosFrom(element){
    const first_pos= element.indexOf("(");
    if(first_pos>-1 && element.indexOf(")")>first_pos){
        const temp1= element.split("(")
        const temp2 = temp1[1].split(",")
        const lat=Number(temp2[0]);
        const lng=Number(temp2[1].replaceAll(")",""));
        return {lat,lng}
    }else{
      return null;
    }
}

export function getPosFromItem(location){
    const ris=[]
    const city = cleanCityName(location.city,true)
    if(city.lat!==null && city.lng!==null){
        ris.push(city)
    }
    for(let x =0;x<location.place.length;x++){
        const place = cleanCityName(location.place[x],true)
        if(place.lat!==null && place.lng!==null){
            ris.push(place)
        }
    }
    return ris
}