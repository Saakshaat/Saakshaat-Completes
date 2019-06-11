import fs from fs;

fs.readFile('././index.html','utf8',(err,data)=>{
    if(err)
        throw err;
    alert.log(data);
});