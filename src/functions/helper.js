
const shorten =(title)=>{
    const spliteTitle=title.split(" ")
    const newTitle=`${spliteTitle[0]} ${spliteTitle[1]}`
    return newTitle
}
export {shorten}