
function App(props){
  return(
    <div className="font-bold text-green-500 bg-black p-10">
      <h1 >Hello World I'm Learning React!</h1>
      <p>And its really fun 😍💻</p>
      <p>I want to be a React {props.dev}  Inshallah</p>
    </div>
  )
}



// Expressions
// You can insert any valid JavaScript expression 
// inside JSX by wrapping it in curly braces { }


// example

// Variables
// Variables are also valid expressions. 
// Insert variables in JSX by wrapping it in curly braces { }.
// function Car(){
//   const hp = 218 * 1.36
//   return(
//     <>
//       <h1>My Car</h1>
//       <p>It's {hp} horsepower </p>
//     </>
//   )
// }

// Function Calls
// Function calls are valid expressions. 
// Insert function calls in JSX by wrapping it in curly braces { }.
// ERxample
function kiloWatToHp(kw){
  return kw * 1.36;
}

function Car(props){
  const hp = 218 * 1.36
  return(
    <>
      <h1> {props.info} </h1>
      {/* <p>It's {kiloWatToHp(700).toFixed(0)} horsepower </p> */}
    </>
  )
}

// Object Properties
// Access object properties within JSX:
// Example

function Myobj(){
  const myObj = {
    name: "BMW",
    model: "M4",
    color: "Black",
  }

  return(
    <>
      <p>My car is {myObj.color} {myObj.name} {myObj.model} </p>
    </>
  )
}


// JSX allows you to insert attributes into HTML elements, 
// but there are a few important differences.

// class = className
// The class attribute is a much used attribute in HTML, 
// but since JSX is rendered as JavaScript, and the class 
// keyword is a reserved word in JavaScript, you are not 
// allowed to use it in JSX.

// Expressions as Attributes
// You can also use JavaScript expressions as attribute values. 
// This is very useful for dynamic attributes.

function Expattributes(){
  const myStyle = 'bg-blue-700 text-white p-5 rounded-sm mt-5'
  return(
    <>
      <h1 className={myStyle}> Use JavaScript expressions as attribute values:</h1>
      <button onClick={ () => alert("Hello!")} >Click Me!</button>
    
    </>
  )
}

// Note that the attribute value is not wrapped in quotes, 
// this is important when using expressions (JavaScript variables) 
// as attribute values. If you use quotes, JSX will treat it 
// as a string literals and not a JavaScript expression.


// The style Attribute
// The style attribute in JSX only accepts a JavaScript object with camelCased CSS property names, 
// rather than a CSS string (as in HTML).

function StyleAtrribute(){
  const myStyles = {
    color: '#000',
    fontSize: '20px',
    fontWeight: '900',
    backgroundColor: "aqua",
    marginTop: '20px',
    padding: "0px 10px"
  }
  return (
    <>
      <h1 style={myStyles}>This is JSX style attribute using Javascript objects</h1>
    </>
  )
}

// Conditions - if statements
// React supports if statements, but not inside JSX.

// To be able to use conditional statements in JSX, 
// you should put the if statements outside of the JSX, 
// or you could use a ternary expression instead:

function Fruit() {
  const x = 5;

  
  // // Option 1:
  // // Write if statements outside of the JSX code:
  // let y = 'Apple'
  // if(x < 10){
  //   y = 'Banana'
  // }
  return(
    <>
      {/* Option 2:
      Use ternary expressions instead: */}
      {/* Note that in order to embed a JavaScript expression inside JSX, 
      the JavaScript must be wrapped with curly braces, {}. */}
      <p>{(x) < 10 ? "Banana" :  "Apple"}</p>
    </>
  )
}


// React Components
// Components are like functions that return HTML elements.
// React Components
// Components are independent and reusable bits of code. 
// They serve the same purpose as JavaScript functions, 
// but work in isolation and return HTML.
// Components come in two types, Class components and Function components,
//  in this tutorial we will concentrate on Function components.

// Create Your First Component
// When creating a React component, the component's name MUST start with an upper case letter.
// React components returns HTML code.

// function Car(){
//   const hp = 218 * 1.36
//   return(
//     <>
//       <h1>My Car</h1>
//       <p>It's {hp} horsepower </p>
//     </>
//   )
// }

// Rendering a Component
// Now your React application has a component called Car, which returns an <h2> element.
// To use this component in your application, refer to it like this: <Car />

// Display the Car component in the "root" element:

// createRoot(document.getElementById('root')).render(
//   <Car />
// )

// Props
// Arguments can be passed into a component as props, which stands for properties.
// You send the arguments into the component as HTML attributes.

// Components in Components
// We can refer to components inside other components:

// example
function Components(){
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      < Car  info={`✔️ My Black BMW M5 and ${kiloWatToHp(700).toFixed(0)} hp`}/>
      < Car  info={`✔️ My Gray Ford Mustag GTR ${kiloWatToHp(650).toFixed(0)} hp`}/>
    </>
  )
}


// React Props
// React Props are like function arguments in JavaScript and attributes in HTML.
// To send props into a component, use the same syntax as HTML attributes:

const ReactProps = (props) => {
  return (
    <div className="font-bold p-2 bg-blue-300 ">
      <h3>
        React Props <br />
        React Props are like function arguments in JavaScript and attributes in HTML.
        To send props into a component, use the same syntax as HTML attributes:
        
        </h3>
        <p>
          For Example: <br />
          <code>
        {`function App(props) { 
            return (
              <h1>Hello {props.user}</h1>
            )
          }`} 
          </code><br />
        
            <p>
            We write like this when we passing props into the HTML attribute: <br />
            <code>{`<h4 style={{backgroundColor:'darkmagenta', color : 'wheat', padding:5}}>Welcome {props.user}</h4>`} </code></p>
         
          The Output Below that says Zakaria comes from props 
        
        </p> <br />
      <h4 style={{backgroundColor:'darkmagenta', color : 'wheat', padding:5}}>Welcome {props.user}</h4>
    </div>
  )
}


// Pass Multiple Properties
// You can send as many properties as you want.

const MultipleProps = (props) => {
  return (
    <>
      <h5>I have {props.color} {props.brand} {props.model}</h5>
    </>
  )
}



const StudentCard = (props) => {
  return (
    <div className="my-5 px-4">
    <span className="font-bold">Name: <span className="font-normal">{props.name}</span></span> <br />
    <span className="font-bold">Department: <span className="font-normal">{props.department}</span></span> <br />
    <span className="font-bold">Age: <span className="font-normal">{props.age}</span></span> <br />
    </div>
  )
}





export  
{
    App, Car, Myobj, Expattributes, StyleAtrribute,
    Fruit, Components, ReactProps, MultipleProps, StudentCard
      
}

