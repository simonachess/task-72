function Tags(props) {
	console.log(props)
	return (
	  <ul className="tags">
	  	{props.array.map((x, i ) => (
			  <li key={i} className="tag">#{x}</li>
		  ))}
	  </ul>
	);
  }
  
  export default Tags;