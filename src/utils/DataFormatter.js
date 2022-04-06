export const DateFormat = (inputDate) => {
    var date = new Date(inputDate);
    if (!isNaN(date.getTime())) {
        // Months use 0 index.
      
        return date.getDate() + '/' + date.getMonth() +1 + '/' + date.getFullYear();
    }
}

export const NumberFormat= (x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}