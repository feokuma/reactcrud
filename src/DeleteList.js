import React from "react";

function DeleteList(props) {
  const modalIdentifier = `delete${props.elementId}`;
  const dataTarget = `#${modalIdentifier}`;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target={dataTarget}
        onClick={(e) => props.getList(e, props.elementId)}
      >
        Delete
      </button>
      <div
        className="modal fade"
        id={modalIdentifier}
        area-aria-label="deleteModal"
        area-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete List</h5>
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
              <p>Are you shure?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => props.deleteList(e, props.elementId)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DeleteList;
