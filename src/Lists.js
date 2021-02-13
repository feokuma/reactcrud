import DeleteList from "./DeleteList";
import UpdateList from "./UpdateList";

function Lists(props) {
  var rows = [];
  props.alldata.forEach((element) => {
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td>
          <UpdateList
            elementId={element.id}
            getList={props.getList}
            singledata={props.singledata}
            updateList={props.updateList}
            handleChange={props.handleChange}
          />
        </td>
        <td>
          <DeleteList
            elementId={element.id}
            getList={props.getList}
            deleteList={props.deleteList}
          />
        </td>
      </tr>
    );
  });
  return (
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
