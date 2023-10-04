
export function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}


export const matchURL = (url:string, pathname:string) => {
  return pathname === url
};




    export const getInitialsFromName = (name:string) => {
      const nameParts = name.split(" ");
      
      if (nameParts.length >= 2) {
        const firstNameInitial = nameParts[0][0].toUpperCase();
        const lastNameInitial = nameParts[nameParts.length - 1][0].toUpperCase();
        
        return `${firstNameInitial}${lastNameInitial}`;
      } else if (nameParts.length === 1) {
        return nameParts[0][0].toUpperCase();
      } else {
        return "";
      }
    }

    export const isValidURL=(url:string)=> {
      try {
        new URL(url);
        return true;
      } catch (error) {
        return false;
      }
    }


    // js function that un slugifies a string
    export const unSlugify = (str:string) => {
      return str
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    }

 
    export function downloadCSV(emails:any) {
      // Convert the array of emails to a CSV string
      const csvContent = "data:text/csv;charset=utf-8," + emails.join("\n");
    
      // Create a data URI for the CSV content
      const encodedUri = encodeURI(csvContent);
    
      // Create an anchor element for downloading
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "emails.csv");
    
      // Simulate a click on the anchor element to trigger the download
      link.click();
    }