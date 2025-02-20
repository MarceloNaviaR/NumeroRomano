// NumeroRomano.spec.js
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

    test('Convierte 7 a VII', () => {
        expect(convertirANumerosRomanos(7)).toBe('VII');
    });

    test('Convierte 8 a VIII', () => {
        expect(convertirANumerosRomanos(8)).toBe('VIII');
    });

    test('Convierte 9 a IX', () => {
        expect(convertirANumerosRomanos(9)).toBe('IX');
    });

    test('Convierte 10 a X', () => {
        expect(convertirANumerosRomanos(10)).toBe('X');
    });
});
