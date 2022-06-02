export function getCookie(name) {
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));

    if (match) return match[2];
    return null;
}

export function setCookie(name, value) {
    const myDate = new Date();
    myDate.setMonth(myDate.getMonth() + 12);
    document.cookie = `${name}=${value};expires=${myDate};domain=localhost;path=/`;
}