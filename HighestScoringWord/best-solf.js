function alphabetPosition(text) {
    return (text.toUpperCase().match(/[a-z]/gi) || []).map(char => char.charCodeAt() - 64).join(' ');
}