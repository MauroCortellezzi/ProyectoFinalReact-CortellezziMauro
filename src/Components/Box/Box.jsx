
const Box = (props) => {
    console.log(props)
  return (
    <div>
        <h2>{props.titulo}</h2>
        {props.children}
    </div>
  )
}

export default Box