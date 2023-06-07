/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🚪',
    'X': '💣',
    'I': '🎁',
    'PLAYER': '💀',
    'BOMB_COLLISION': '🔥',
    'GAME_OVER': '👎',
    'WIN': '🏆',
    'HEART': '❤️',
};

const maps = [];
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
`);

maps.push(`
    OXXXXXXXXXX
    -XX--XXXXXX
    ------XXXXX
    -XXXX-XXXXX
    -XX---XXXXX
    -XXX---XXXX
    XXXXXXXXXX
`);

maps.push(`
    O-----XXXX
    X-XXX-XXXX
    XX-----XXX
    XXXX-XXXXX
    X--------X
    XX--XXXX-X
    XX----XXXX
    XXXX-----X
    X----XXXIX
    XXXXXXXXXX
`);

maps.push(`
    XI-XXXXXXX
    X--------X
    X--XXX-XXX
    XXXXX---XX
    X-XXXX-XXX
    XX-------X
    XX-XXXXX-X
    X----XXX-X
    X--X--XXOX
    XXXXXXXXXX
`);

maps.push(`
    XI---XXXXX
    XX---X--XX
    XX-XXXXXXX
    X-----X--X
    XXXX-XXX-X
    X-------OX
    XXXX--XXXX
    XX---X--XX
    X-XX-XXXXX
    XXXXXXXXXX
`);

maps.push(`
    XOXXXXXXXX
    X---XXXX-X
    X-X-XX--XX
    X-X------X
    XX--XX-XXX
    X--XXX-X-X
    XXXXXX--XX
    X-------XX
    X-XX-XXXXX
    XIXXXXXXXX
`);

maps.push(`
    X-XXXXXXXX
    X------IXX
    XX--X-XXXX
    X--X--X--X
    X-XX-XXX-X
    XX-------X
    X--XXXX--X
    X-XX-XXXXX
    X---------
    XOXXXXXXXX
`);
