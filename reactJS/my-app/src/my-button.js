const user={
    name: 'Nguyen Sy Manh',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}
function MyButton() {
    function handleCick(){
        alert('Hello Manh Nguyen Sy')
    }
  return (
    <div>
        <p>Hello {user.name}</p>
        <img className="image" src={user.imageUrl}></img><br/>
      <button onClick={handleCick}>I'm a button</button>
      
    </div>
  );
}
export default MyButton;
