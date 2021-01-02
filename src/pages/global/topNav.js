const TopNavigation = () =>{
    const navState = State({
        user:''
    })
    //login
    //cookies
    //configuração
    const autoLogin = () =>{
        console.log('Logando automaticamente')
    }
    navControl()
}

const navControl = () =>{

    const placeState = State({
        active : '',
        inRender : null,
        searchText :null,
        searchResult:State({
            itens: [],
            lista: []
        }),
    })
   
    const itens = create('div')
    itens.setAttribute('id','navigation')
//---- manipulação da interface

    const troca = e =>{

        
        placeState.getActive().setAttribute('class','desativado')
        e.setAttribute('class','ativado')
        placeState.setActive(e)
        
    }

    
    const itensNavigation = {
        Home:e=>{homePage(placeState); troca(e)},
        Suporte:e=>{ troca(e);placeState.setInRender;suportPage(placeState)},
        Sobre:e=>{ troca(e);sobrePage(placeState)}
    }

    Object.keys(itensNavigation).forEach(key=>{
        let h1 = create('h1')
        h1.innerHTML = key
        let div = create('div')
        if(key==='Home'){
            h1.setAttribute('class','ativado')
            placeState.setActive(h1) 
        }else h1.setAttribute('class','desativado')
        h1.addEventListener('click',e=>itensNavigation[key](h1))
        
        div.appendChild(h1)
        render(div,itens)
    })

    const content = create('div')

    content.setAttribute('id','top-navigation')

    homePage(placeState)
    
    render(itens,content)

    render(content,'world')
}

