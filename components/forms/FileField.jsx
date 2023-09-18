import FileInputComponent from 'react-file-input-previews-base64'


export default function FileField({value, type, onChange, name, required, placeholder, label }) {
	 
	return (
		<div
			className="rounded-xl bg-input/99 border-1 border-gray-500 border-dashed pl-3 h-input flex items-center">
				<FileInputComponent
			labelText="Select file"
			labelStyle={{fontSize: 14}}
			multiple={false}
			type={type}
			value={value}
			accept="image/*"
			inputId="file"
			parentStyle={{margin: 0}}
			buttonComponent={<button className='rounded-xl py-3 p-5 ml-1 bg-button text-white text-xs'>SUBMIT</button>}
			className="custom-file-input rounded-lg border-2 border-gray-300 bg-gray-600 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			callbackFunction={(file_arr) => {

				console.log(file_arr.base64)
					onChange({
						target: {
							name: name,
							value: file_arr.base64
						}
					});

			}}
			name={name}
			imagePreview={true}
			  />
			</div>
	);
}