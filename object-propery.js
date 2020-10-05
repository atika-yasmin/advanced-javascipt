const students = [
    {id:12, name:'atika'},
    {id:15, name:'roshni'},
    {id:13, name:'mahim'},
    {id:16, name:'khusbu'},
    {id:19, name:'arif'}
]
const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id > 12);
console.log(bigger);