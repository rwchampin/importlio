
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