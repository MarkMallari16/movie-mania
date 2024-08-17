export const formattedDate = (birthDate) => {
    const date = new Date(birthDate);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();


    return `${month} ${day}, ${year}`;
}
export const formattedAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    return `(${age} years old)`;
}