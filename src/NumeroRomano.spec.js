import convertirANumerosRomanos from './NumeroRomano';

describe('Conversión a Números Romanos', () => {
    test('Convierte 1 a I', () => {
        expect(convertirANumerosRomanos(1)).toBe('I');
    });
});

