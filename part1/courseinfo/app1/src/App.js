
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) =>(
  <p>{props.title} {props.exercise}</p>
)

const Content = (props) => {

  return(
    <div>
      <Part title={props.parts[0].title} exercise={props.parts[0].exercise}/>
      <Part title={props.parts[1].title} exercise={props.parts[1].exercise}/>
      <Part title={props.parts[2].title} exercise={props.parts[2].exercise}/>
    </div>
  )
}



const Total = (props) => {
  let c = 0;
  props.parts.forEach(part => {
    c += part.exercise;
  });
  return (
    <p>Number of exercises {c}</p>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let parts = [
  {
    title: part1,
    exercise: exercises1
  },
  {
    title: part2,
    exercise: exercises2
  },
  {
    title: part3,
    exercise: exercises3
  }];

  return (
    <div>
      <Header course={course}/>
      <Content parts= {parts} />
      <Total parts= {parts}/>
    </div>
  )
}

export default App