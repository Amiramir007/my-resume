const toggleBtn = document.querySelector('button')
const firstPage = document.querySelector('.resume_right')
const secondPage = document.querySelector('.second-page')


flag = true
toggleBtn.addEventListener('click', () => {
    firstPage.classList.toggle('hidden')
    secondPage.classList.toggle('hidden')
    if(flag){
        toggleBtn.innerHTML = 'First Page'
        flag = false
    }
    else{
         toggleBtn.innerHTML = 'Second Page'
         flag = true
    }
    

    
   
    
})