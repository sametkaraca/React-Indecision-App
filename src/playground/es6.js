//VAR
var nameVar = "Samet"
var nameVar = "Haluk"

//LET
let nameLet = "Samet"
//let nameLet="Levent" * Dublication Error
nameLet = "Semih" //This is available

//CONST
const nameConst = "HTTPRequest"
nameConst = "NewHTTP" //Also error

//Block Scopping

var fullName = 'Samet Karaca'

if (fullName) {
    var firstName = fullName.split(' ')[0]
    // if 'let or const' --> error: Uncaught ReferenceError: firstName is not defined
}

console.log(firstName) // We can access var data here out of the block

//ARROW FUNCTIONS
const squareArrow = (x) => (x * x)
console.log(squareArrow(5))

//---------------------------------------------------------------------------
const getFirstName = (name) => {
    const firstName = name.split(' ')[0]
    console.log(firstName)
}

var MyName = getFirstName('Dalidom Dale')
//---------------------------------------------------------------------------

const getFirstName = (fullName) => (fullName.split(' ')[0])
console.log(getFirstName('Samet Karaca'))

//---------------------------------------------------------------------------

const user = {
    name: 'Samet',
    cities: ['Poznan', 'Manisa', 'Izmir'],
    printPlacedLive() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived ' + city)
        })
    }
}

user.printPlacedLive()

//--------------------------------------------------------------------------

const multiplier = {
    numbers: [1,2,3,4,45,25,25,23],
    multiplyBy: 3,
    
    multiply(){
        return this.numbers.map((number)=>number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())

//---------------------------------------------------------------------------





let count=0

const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button> 
        </div>
    )    
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()
