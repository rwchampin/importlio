"use client"
import {useState} from 'react';
import {useDropzone} from 'react-dropzone';
 
import Papa from 'papaparse';


function CSVUploader() {
  const [urls, setUrls] = useState([]);

  const handleFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    Papa.parse(file, {
      complete: (results) => {
        const parsedUrls = results.data.flat().filter(Boolean).map((url) => ({ url }));
		setUrls(parsedUrls);
      },
      header: false,
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: '.csv',
    onDrop: handleFileDrop,
  });
  
	// const URLTable=dynamic(() => import('@/components/utils/URLTable'), {
	// 	ssr: false,
	// });
  return (
    <div className="container">
		  {urls.length===0&&(<div {...getRootProps()} className={`dropzone ${isDragActive? 'active':''}`}>
			  <input {...getInputProps()} />
			  <p>Drag and drop a CSV file here, or click to browse.</p>
		  </div>
	  		
		  )}
      {/* {urls.length && <URLTable urls={urls} /> } */}
      
    </div>
  );
}

export default CSVUploader;
