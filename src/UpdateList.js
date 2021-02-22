import React from "react";
import InputFloatingLabel from "./components/InputFloatingLabel";

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
              <span className="modal-title">Update List</span>
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
              <InputFloatingLabel
                placeholder="Title"
                fieldname="title"
                fieldvalue={props.singledata.title}
                handleChange={props.handleChange}
              />
              <br />
              <InputFloatingLabel
                placeholder="Author"
                fieldname="author"
                fieldvalue={props.singledata.author}
                handleChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secundary"
                data-dismiss="modal"
                onClick={props.cleanList}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-info"
                data-dismiss="modal"
                onClick={(e) => {
                  props.updateList(e, props.elementId);
                }}
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
