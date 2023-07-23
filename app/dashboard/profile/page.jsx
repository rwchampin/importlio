"use client"
import { useRef, useEffect, useState } from 'react'
import MediumEditor from 'medium-editor';

export default function Page() {
	const [name, setTitle] = useState("")
	const config = [
		{
			labelText: 'Name',
			labelId: 'Name',
			type: 'text',
			onChange,
			value: name,
			required: true,
		},{
			labelText: 'Content',
			labelId: 'content',
			type: 'textarea',
			onChange,
			value: content,
			required: true,
		} 
	]
	useEffect(() => {
		var editor = new MediumEditor('.editable', {
    toolbar: {
        buttons: [
            'bold',
            'italic',
            {
                name: 'h1',
                action: 'append-h2',
                aria: 'header type 1',
                tagNames: ['h2'],
                contentDefault: '<b>H1</b>',
                classList: ['custom-class-h1'],
                attrs: {
                    'data-custom-attr': 'attr-value-h1'
                }
            },
            {
                name: 'h2',
                action: 'append-h3',
                aria: 'header type 2',
                tagNames: ['h3'],
                contentDefault: '<b>H2</b>',
                classList: ['custom-class-h2'],
                attrs: {
                    'data-custom-attr': 'attr-value-h2'
                }
            },
            'justifyCenter',
            'quote',
            'anchor'
        ]
    }
});
	},[])
	return (
		<div className="">
			<div className="editable" />
			<Form
				config={config}
				/>
			</div>

	)
}