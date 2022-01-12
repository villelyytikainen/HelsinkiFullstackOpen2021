const Course = ({courses}) => {

  return(
      <div>
          <Header courses={courses[0].name}/>
          <Content parts={courses[0].parts}/>
          <Total parts={courses[0].parts}/>
          <Header courses={courses[1].name}/>
          <Content parts={courses[1].parts}/>
          <Total parts={courses[1].parts}/>
      </div>
  )
}

const Header = (props) => {
    return(
      <h1>{props.courses}</h1>
    )
  }
  
  const Part = (props) => {
    return(
      <p>{props.part.name}</p>
    )
  }
  
  const Content = (props) => {
    return props.parts.map(part => <Part key={part.id} part={part} />)
  }
  
  const Total = (props) => {
    let total = 0;

    props.parts.forEach(part => total += part.exercises);

    console.log(total)
    return(
      <p>
          Number of exercises {total}
      </p>
    )
  }

export default Course;