import convertirANumerosRomanos from './NumeroRomano';

describe('Conversión a Números Romanos', () => {
    test('Convierte 1 a I', () => {
        expect(convertirANumerosRomanos(1)).toBe('I');
    });

    test('Convierte 2 a II', () => {
        expect(convertirANumerosRomanos(2)).toBe('II');
    });

    test('Convierte 3 a III', () => {
        expect(convertirANumerosRomanos(3)).toBe('III');
    });

    test('Convierte 4 a IV', () => {
        expect(convertirANumerosRomanos(4)).toBe('IV');
    });

    test('Convierte 5 a V', () => {
        expect(convertirANumerosRomanos(5)).toBe('V');
    });

    test('Convierte 6 a VI', () => {
        expect(convertirANumerosRomanos(6)).toBe('VI');
    });

    test('Convierte 11 a XI', () => {
        expect(convertirANumerosRomanos(11)).toBe('XI');
    });

    test('Convierte 15 a XV', () => {
        expect(convertirANumerosRomanos(15)).toBe('XV');
    });

    test('Convierte 20 a XX', () => {
        expect(convertirANumerosRomanos(20)).toBe('XX');
    });

    test('Convierte 50 a L', () => {
        expect(convertirANumerosRomanos(50)).toBe('L');
    });
});
