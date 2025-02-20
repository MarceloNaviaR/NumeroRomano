import convertirANumerosRomanos from './NumeroRomano';

describe('Conversión a Números Romanos', () => {
    test('Convierte 1 a I', () => {
        expect(convertirANumerosRomanos(1)).toBe('I');
    });

    test('Convierte 2 a II', () => {
        expect(convertirANumerosRomanos(2)).toBe('II');
    });

    test('Convierte 101 a CI', () => {
        expect(convertirANumerosRomanos(101)).toBe('CI');
    });

    test('Convierte 500 a D', () => {
        expect(convertirANumerosRomanos(500)).toBe('D');
    });

    test('Convierte 999 a CMXCIX', () => {
        expect(convertirANumerosRomanos(999)).toBe('CMXCIX');
    });

    test('Convierte 1000 a M', () => {
        expect(convertirANumerosRomanos(1000)).toBe('M');
    });
});
