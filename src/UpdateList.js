import React from "react";

function UpdateList(props) {
  var modalIdentifier = `update${props.elementId}`;
  var dataTarget = `#${modalIdentifier}`;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target={dataTarget}
        onClick={(e) => props.getList(e, props.elementId)}
      >
        Update
      </button>
      <div
        className="modal fade"
        id={modalIdentifier}
        role="dialog"
        area-aria-label="updateModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update List</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="title"
                name="title"
                value={props.singledata.title}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="author"
                name="author"
                value={props.singledata.author}
                onChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secundary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-info"
                data-dismiss="modal"
                onClick={(e) => {props.updateList(e, props.elementId)}}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpdateList;
