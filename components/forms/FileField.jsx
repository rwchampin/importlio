import FileInputComponent from 'react-file-input-previews-base64'


export default function FileField({value, type, onChange, name, required, placeholder, labelId, labelText, label }) {
	 
	return (
		<FileInputComponent
			labelText="Select file"
			labelStyle={{fontSize: 14}}
			multiple={false}
			type={type}
			value={value}
			callbackFunction={(file_arr) => {


					onChange(file_arr.file);

			}}
			accept="image/*"
			name={name}
			imagePreview={true}
			  />
	);
}