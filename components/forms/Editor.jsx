import React, {useState,useEffect} from 'react';
import ReactQuill, {Quill} from 'react-quill';

import 'react-quill/dist/quill.snow.css';





export default function Editor({value, onChange, name, placeholder, required, label, labelId, type}) {

	 
	return <textarea value={value} name={name} onChange={onChange} />
	// return <ReactQuill
	// 	theme="snow"
	// 	value={textContent}
	// 	name={name}
	// 	onChange={(content, delta, source, editor) => {
	// 		setTextContent(content);

		
	// }} />;


}