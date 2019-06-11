const btn = document.getElementById('add');
var value = document.getElementById('item').value;

//user clicks button to add todo item
//user given item gets added to todo list
btn.addEventListener('click', function(e){
    
    var value = document.getElementById('item').value;
    if(value){
        console.log(value);
    }
    else{
        console.log('F');
    }
    btn.style.background = '#444';
});

btn.addEventListener('mouseleave',(e)=>{
    btn.style.background = '#fff';
});
