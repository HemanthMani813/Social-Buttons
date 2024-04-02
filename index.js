const Button = props => {
  //  Write your code here.
  return (<button className={props.className}>{props.name}</button>);
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Socail Buttons</h1>
    <div className='btn-continer'>
      <Button className="like-button" name='Like' />
      <Button className='comment-button' name='Comment' />
      <Button className='share-button' name='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
