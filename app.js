const bg=document.getElementById('wrap')
const code=document.getElementById('color')
const click=document.getElementById('btn')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


click.addEventListener('click',colorchng)

function colorchng()
{
    let randval='#'
    for(i=1;i<=6;i++)
    {
        randval=randval+change()
    }
    code.innerHTML=randval
    bg.style.backgroundColor=randval  //Updating styles in JS

}


function change()
{
    let val=Math.floor(Math.random()*16)
    return hex[val]
}