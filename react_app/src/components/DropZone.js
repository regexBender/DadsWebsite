import React from 'react';
import {useDropzone} from 'react-dropzone';

function DropZone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  let counter = 0;
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      <div style={{display: 'flex'}}>
        <div>
          {file.path} - {file.size} bytes
        </div>
        <div>
          <input 
              type="text" 
              id={`image_name_${++counter}`} 
              name={`image_name_${++counter}`}  
              placeholder={file.path.replace(/\..*/, "")} />
        </div>
        <div>
          <input 
              type="text" 
              id={`image_label_${++counter}`} 
              name={`image_label_${++counter}`} 
              value="portraits" />
      </div>
    </div>
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DropZone