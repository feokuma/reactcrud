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
        class="modal fade"
        id={modalIdentifier}
        area-aria-label="deleteModal"
        area-hidden="true"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete List</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are you shure?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={(e) => props.deleteList(e, props.elementId)}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
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
