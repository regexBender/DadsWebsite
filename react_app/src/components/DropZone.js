import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';
import axios from 'axios';


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: grey;
  border-style: dashed;
  background-color: #fafafa;
  color: black;
  outline: none;
  transition: border .24s ease-in-out;
`;




//let img_name;

function DropZone(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
 
  let [img_name, setImg_name] = useState(0);
  let [label, setLabel] = useState(0);

  let counter = 0;
  const files = acceptedFiles.map(file => (
    <form 
      key={file.path} 
      id="upload_form" 
      onSubmit = {(event) => props.handleSubmit(event, img_name.value, label.value, file)}> 
      <li key={file.path}>
        <div style={{display: 'flex'}}>
          <div>
            {file.path} - {file.size} bytes
          </div>
          <div>
            <input 
                type="text"
                onInput = {() => console.log(img_name.value)}
                ref = {img_name => (setImg_name(img_name))} 
                id={`image_name_${++counter}`} 
                name={`image_name_${++counter}`}  
                defaultValue={file.path.replace(/\..*/, "").replace(/_/g, " ")} />
          </div>
          <div>
            <select 
              onChange = { (e) => console.log(label.value)} 
              ref = {label => setLabel(label)}>
              <option value="portraits">Portraits</option>
              <option value="landscapes">Landscapes</option>
              <option value="architecture">Architecture</option>
              <option value="still-life">Still Life</option>
            </select>
            
        </div>
      </div>
      </li>
      <input type="file" name="file" />
      <input  
        value="Upload" 
        type="submit" />
    </form>
  ));


  return (
    <section className="container">
      <Container {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Container>
      <aside style = {{color: 'white'}}>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

export default DropZone