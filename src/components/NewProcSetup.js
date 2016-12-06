import React from 'react';

const NewProcSetup = () => {
  return (
    <div className="col-sm-12">

      <div className="form-group">

    <select className="form-control input-lg"  id="sel1">
      <option value="" disabled selected>Choose Folder</option>
      <option>Folder Name One</option>
      <option>Folder Name Two</option>
      <option>Folder Name Three</option>
    </select>
  </div>
    <input type="text" className="form-control input-lg" placeholder="Enter Process Name"/>
    <button className="btn col-xs-12 btn-lg text-center btn-primary m-b m-t">Create Process</button>

    </div>

  );
};
export default (NewProcSetup);
