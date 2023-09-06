"use client";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const Editor=({
	placeholder,
	onChange,
	value,
	...props
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
		 

			<ReactQuill
				theme={'snow'}
			onChange={handleChange}

				modules={modules}
				value={value}
				formats={formats}
				bounds={'form'}
				placeholder={placeholder}
				className='editor border-2 border-gray-9 '
				{...props}
			/>
			 
		 
	);
};


 

export default Editor;
