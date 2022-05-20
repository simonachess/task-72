function Tags({tags}) {
	return (
	  <ul className="tags">
	  	{tags.map((x, i ) => (
			  <li key={i} className="tag">#{x}</li>
		  ))}
	  </ul>
	);
  }
  
  export default Tags;