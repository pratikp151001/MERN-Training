export default function makeList(argumentArray){
    let ItemList=[]
    argumentArray.forEach((element,index) => {
        ItemList.push(<> <li key={index}>{element}</li> </>)
    });
    return ItemList
}