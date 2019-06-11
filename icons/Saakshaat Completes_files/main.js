const submitBtn = document.getElementById('add');
var value = document.getElementById('item').value;

//user clicks button to add todo item
//user given item gets added to todo list
submitBtn.addEventListener('click', function(e){
    
    var value = document.getElementById('item').value;
    if(value){
        console.log(value);
    }
    else{
        console.log('F');
    }
    submitBtn.style.background = '#444444';
});

submitBtn.addEventListener('mouseleave',(e)=>{
    submitBtn.style.background = '#fff';
});


// this is to add a hover effect over the delete button

var bin = document.querySelector('.remove');

bin.addEventListener('mouseover', (e)=>{
    setTimeout( ()=>  bin.style.fill = "#e85656", 100);
});

bin.addEventListener('mouseout', (e)=>{
    setTimeout(()=>bin.style.fill = "black",100);
});

bin.addEventListener('click', (e)=>{
    bin.classList.add('bin_clicked');
});

//

var comp = document.querySelector('.complete');

comp.addEventListener()
