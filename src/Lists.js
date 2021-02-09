
function Lists(props){
    var rows = [];
    props.alldata.forEach(element => {
       rows.push(
           <tr key={element.id}>
               <td>{element.id}</td>
               <td>{element.title}</td>
               <td>{element.author}</td>
           </tr>
       ) 
    });
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    ); 
}

export default Lists;