let data = { price: 5, quantity: 2 }
let target = null

class Dep {
    constructor() {
        this.subscribers = []
    }
    depend() {
        if(target && !this.subscribers.includes(target)) {
            this.subscribers.push(target)
        }
    }
    notify() {
        this.subscribers.forEach(sub => sub())
    }
}

Object.keys(data).forEach(key => {
    let internValue = data[key]

    const dep = new Dep()
    Object.defineProperty(data, key, {
        get() {
            dep.depend()
            return internValue
        },
        set(newVal){
            internValue = newVal
            dep.notify()
        }
    })
})

let watcher= (myFunc) => {
    target=myFunc
    target()
    target = null
}

watcher(()=> {
    data.total = data.price * data.quantity
})