export function toHex(value: number) {
    if (value < 0 || value > 255) {
        throw new RangeError("Input must be between 0 and 255.");
    }
    return value.toString(16).toUpperCase().padStart(2, "0");
}
