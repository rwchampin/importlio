"use client";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Editor=({
	placeholder,
	onChange,
	value
}) => {



	const handleChange=(html) => {
		onChange({target: {value: html, name: 'content'}})
	};


	const modules={
		toolbar: [
			[ {header: '1'}, {header: '2'}, {font: []} ],
			[ {size: []} ],
			[ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
			[
				{list: 'ordered'},
				{list: 'bullet'},
				{indent: '-1'},
				{indent: '+1'},
			],
			[ 'link', 'image', 'video' ],
			[ 'clean' ],
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
	};

	const formats=[
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
	];
 

	return (
		<div>	</div>

			// <ReactQuill
			// 	theme={'snow'}
			// onChange={handleChange}
			// value={value}
			// 	modules={modules}
			// 	formats={formats}
			// 	bounds={'.app'}
			// 	placeholder={placeholder}
			// />
			 
		 
	);
};


 

export default Editor;
