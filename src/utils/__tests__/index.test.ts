import { addHours, castToNumber, formatAMPM, formatBytes, sanitizeEmail, validateEmail } from '..';

describe('formatBytes', () => {
    it('returns "0 Bytes" for zero', () => {
        expect(formatBytes(0)).toBe('0 Bytes');
    });

    it('formats kilobytes and megabytes', () => {
        expect(formatBytes(1024)).toBe('1 KB');
        expect(formatBytes(1536)).toBe('1.5 KB');
        expect(formatBytes(1048576)).toBe('1 MB');
    });
});

describe('formatAMPM', () => {
    it('formats morning and afternoon times', () => {
        expect(formatAMPM(new Date(2024, 0, 1, 9, 5))).toBe('9:05 am');
        expect(formatAMPM(new Date(2024, 0, 1, 15, 30))).toBe('3:30 pm');
    });

    it('shows midnight as 12 am', () => {
        expect(formatAMPM(new Date(2024, 0, 1, 0, 0))).toBe('12:00 am');
    });
});

describe('addHours', () => {
    it('adds hours without changing the original date', () => {
        const start = new Date(2024, 0, 1, 10, 0);
        const result = addHours(start, 2);
        expect(result.getHours()).toBe(12);
        expect(start.getHours()).toBe(10);
    });
});

describe('sanitizeEmail', () => {
    it('trims whitespace and lowercases', () => {
        expect(sanitizeEmail('  John.Doe@Example.COM ')).toBe('john.doe@example.com');
    });
});

describe('validateEmail', () => {
    it('accepts a valid email', () => {
        expect(validateEmail('volunteer@example.com')).toBe(true);
    });

    it('rejects invalid or empty emails', () => {
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('not-an-email')).toBe(false);
        expect(validateEmail('missing@domain')).toBe(false);
    });
});

describe('castToNumber', () => {
    it('converts numeric strings to numbers', () => {
        expect(castToNumber('42')).toBe(42);
    });
});
