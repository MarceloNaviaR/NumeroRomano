import convertirANumerosRomanos from './NumeroRomano';

describe('Conversión a Números Romanos', () => {
    test('Convierte 1 a I', () => {
        expect(convertirANumerosRomanos(1)).toBe('I');
    });

    test('Convierte 2 a II', () => {
        expect(convertirANumerosRomanos(2)).toBe('II');
    });
});


