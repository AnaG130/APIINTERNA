const crypto = require('crypto');

const ENCRYPTION_KEY = Buffer.from("1234567890123456", "utf8"); // 16 bytes
const FIXED_IV = Buffer.from("6543210987654321", "utf8");       // 16 bytes

function encryptData(plainText) {
    try {
        const cipher = crypto.createCipheriv("aes-128-cbc", ENCRYPTION_KEY, FIXED_IV);
        let encrypted = cipher.update(plainText, "utf8", "base64");
        encrypted += cipher.final("base64");
        return encrypted;
    } catch (error) {
        console.error("Encryption error:", error);
        throw new Error("Encryption failed");
    }
}

function decryptData(encryptedText) {
    try {
        if (!encryptedText) throw new Error("No se puede desencriptar: valor nulo o vacío.");
        const decipher = crypto.createDecipheriv("aes-128-cbc", ENCRYPTION_KEY, FIXED_IV);
        let decrypted = decipher.update(encryptedText, "base64", "utf8");
        decrypted += decipher.final("utf8");
        return decrypted;
    } catch (error) {
        console.error("Decryption error:", error);
        throw new Error("Decryption failed");
    }
}


module.exports = {
    encryptData,
    decryptData
};
