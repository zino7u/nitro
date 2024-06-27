const giftCodesElement = document.getElementById('giftCodes');

function generateRandomCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

function checkGiftCode(code) {
    // Hier kannst du die Logik zum Überprüfen des Gift-Codes implementieren
    // Beispiel: Hier wird einfach angenommen, dass alle generierten Codes gültig sind
    return true;
}

function generateAndCheckCodes() {
    const foundCodes = [];
    let attempts = 10;

    while (attempts > 0 && foundCodes.length < 10) {
        const code = generateRandomCode();
        const isValid = checkGiftCode(code);
        if (isValid) {
            foundCodes.push(code);
        }
        attempts--;
    }

    return foundCodes;
}

function displayGiftCodes() {
    const giftCodes = generateAndCheckCodes();
    if (giftCodes.length === 0) {
        giftCodesElement.innerHTML = '<p>Keine gültigen Gift Codes gefunden.</p>';
    } else {
        const codesList = giftCodes.map(code => {
            return `<p><a href="https://discord.gift/${code}" target="_blank">${code}</a></p>`;
        }).join('');
        giftCodesElement.innerHTML = codesList;
    }
}

setInterval(displayGiftCodes, 1000); // Alle 1 Sekunde Codes generieren und überprüfen
