/**
 * 
 * @param {*} tState- recebe um state global ou um contextualizador
 */
const homePage = tState =>{
   

    tState.setInRender('search')
   // verificar login
   // preferencias
   // Principalmente o fomulário de busca
    clearRoot()
    searchInterface({
    getSearchText:tState.getSearchText,
    setSearchText:tState.setSearchText,
    results:tState.searchResult
     })

}

/**
 * 
 * @param {Object}  e -  
 */
const searchInterface = e =>{
    const {getSearchText,setSearchText,results} = e 

    const searchState = State({
        formAction:null
    })

    const handleSearch = ()=>{
        console.log(getSearchText())
        //document.body.innerHTML+=`<script src="../src/pages/home/magazine.js"></script>`
        magazine(results)
    }

    const handleTextChange = ()=>{
        setSearchText(input.firstChild.value)
    }

    const div = create('div') 

    const form = create('form')

    const containerForm = create('div')

    const label = labelSearch()
   
    const button = buttonSearch()

    const input = inputSearch(getSearchText(),handleTextChange)

    button.addEventListener('click',e=>{e.preventDefault(),handleSearch()})

    div.id='containerInputs'
    form.id ='formSearch'
    containerForm.id='search'

    render(button,div)
    
    render(input,div)

    render(label,form)

    render(div,form)

    render(form,containerForm)
    
    render(containerForm)

}

const labelSearch =()=>{
    const label = create('label')

    label.innerText = 'Para busca digite uma referência a peça'

    const containerLabel = create('div')

    render(label,containerLabel)

    return containerLabel

}

const inputSearch=(value ,event =null)=>{
    const input = create('input')
    const containerInput = create('div')

    input.style=`
        width:100%;
        font-size:18px;
    `

    containerInput.style = `
        width:90%;
    `

    input.setAttribute('placeholder','Ex.: Gol quadrado ou Zen')

    if(value == '' || value == null)
       null
    else input.value =value
    console.log('Value é : '+value)
       
    input.addEventListener('keyup',e=>{event()})
    
    render(input,containerInput)

    return containerInput
    
}

const buttonSearch =()=>{
    const button = create('input')

    button.setAttribute('type','image')
    button.setAttribute('src','../src/assets/icons/busca-dark.svg')

   // button.addEventListener('click',e=>event(e))

    return button
}
