function Tags(props) {
	console.log(props)
	return (
	  <div className="tags">
	  	{props.array.map((x, i ) => (
			  <div key={i} className="tag">#{x}</div>
		  ))}
	  </div>
	);
  }
  
  export default Tags;