import database from '../../../../const/database.json'
export const filterOnlyByAuthor = (selectedAuthor)=>{
    return database.filter((item,) => {
        return !(selectedAuthor && !item.autore.includes(selectedAuthor));
     });
}