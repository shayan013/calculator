const number=document.querySelectorAll('.data')
let output=document.querySelector('.output')
const result=document.querySelector('.equal')
const  clear=document.querySelector('.data-all-clear')
console.log(result)
number.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let firstnum =e.target.dataset.num
output.textContent+=firstnum

    })
})


result.addEventListener('click',(e)=>{
    if(output.textContent=='')
    {
        output.textContent='enter value'
    }
    else{
  const ans=eval(output.textContent)
 
output.textContent=ans

    }
  console.log(output.textContent)
  console.log('equal')


})
clear.addEventListener('click',()=>{
    output.textContent=''
})