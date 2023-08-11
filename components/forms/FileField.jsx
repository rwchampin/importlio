import FileInputComponent from 'react-file-input-previews-base64'


export default function FileField({value, type, onChange, name, required, placeholder, labelId, labelText, label }) {
	 
	return (
		<FileInputComponent
			labelText="Select file"
			labelStyle={{fontSize: 14}}
			multiple={false}
			type={type}
			value={value}
			className="custom-file-input rounded-lg border-2 border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
			callbackFunction={(file_arr) => {

				console.log(file_arr.base64)
					onChange({
						target: {
							name: name,
							value: file_arr.base64
						}
					});

			}}
			accept="image/*"
			name={name}
			imagePreview={true}
			  />
	);
}