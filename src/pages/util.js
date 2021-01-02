/**
 * @param {String} id - String for return element
 */

function byId(id){
    return document.getElementById(`${id}`)
}
/**
 * 
 * @param {*} element 
 */
function create(element){
    return document.createElement(`${element}`)
}

function clearRoot(){
    byId('root').innerHTML = ''
}
/**
 * @param {*} child - obrigatório, pode ser String ou HTMLElment
 * @param {*} father - opcional, pode ser String ou HTMLElement
 */
function render(child ,father = byId('root')){
    if(typeof father == 'string'){
        if(typeof child == 'string')
            return byId(father).innerHTML +=child
        return byId(father).appendChild(child)
    }else{
        if(typeof child == 'string')
            return father.innerHTML +=child
        return father.appendChild(child)
    }
}
/**
 * 
 * @param {*} obj - objeto que vai ser usado dentro da sua cadeia de funcoes
 * @returns  retorna a cadeia de itens passados mais funções para mudar
 */
function State(obj ={}){
    const state = Object();
    Object.keys(obj).forEach(key=>{ 
       let M =  key[0].toUpperCase() + key.substr(1)
        state[`set${M}`]= e=>{return this[key] = e ;}
        state[`get${M}`]=()=>{return this[key]}
        state[`set${M}`](obj[key]) ;
    })
    state.newState = nkey=>{ 
        let M =  nkey[0].toUpperCase() + nkey.substr(1)
        state[`set${M}`]= e=>{ return this[nkey] = e }
        state[`get${M}`]=()=>{ return this[nkey] }
    }
    state.retunrThis =()=>{return state}
   
    return state
}

function onClick(element,event){
    if(typeof element == 'string'){
       return byId(`${element}`).addEventListener('click',event)
    }else{
       return element.addEventListener('click',event)
    }
}

function onChange(element,event){
    if(typeof element == 'string'){
       return byId(`${element}`).addEventListener('change',event)
    }else{
       return element.addEventListener('change',event)
    }
}