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
    I------XXXX
    -XXXXX---XX
    XXXXXX-XXXX
    XX-----XXXX
    XXXXX---XXX
    XX----XXXXX
    X--XXXX-XXX
    X-XXX--XXXX
    X--------X
    XXXXXXXXOX
`);

maps.push(`
    O-----XXXX
    X-XXX-XXXX
    XX-----XXX
    XXXX-XXXXX
    X--------X
    XX--XXXX-O
    XX----XXXX
    XXXX-----X
    X----XXXIX
    XXXXXXXXXX
`);

maps.push(`
    O--XXXXXXX
    X--------X
    X--XXX-XXX
    XXXXX---XX
    X-XXXX-XXX
    XX-------X
    XX-XXXXX-O
    X----XXX-X
    X--X--XX-I
    XXXXXXXXXX
`);

maps.push(`
    I----XXXXX
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
    I-XXXXXXXX
    X---XXXX-X
    X-X-XX--XX
    X-X------X
    XX--XX-XXX
    X--XXX-X-X
    XX-XXXX-OX
    X-------XX
    X-XX-XXXXX
    XXXXXXXXXX
`);

maps.push(`
    O-XXXXXXXX
    X------XXX
    XX--X-XXXX
    X--X--X--X
    X-XX-XXX-X
    XX-------X
    X--XXXX--X
    X-XX-XXXXI
    X---------
    XXXXXXXXXX
`);
