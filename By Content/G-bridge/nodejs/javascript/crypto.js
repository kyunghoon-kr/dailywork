 // 모듈추출
 const crypto = require('crypto'); const algorithm = 'des-ecb';
 const key = Buffer.from("d0e276d0144890d3", "hex"); 
 var plaintext = '마마무';
 // 암호화
 var cipher = crypto.createCipheriv(algorithm, key, null); 
 let encrypted = cipher.update(plaintext, 'utf8', 'hex'); 
 encrypted += cipher.final('hex');
 // 64bit 키
 // 복호화
 var decipher = crypto.createDecipheriv(algorithm, key, null); 
 let decrypted = decipher.update(encrypted, 'hex', 'utf8'); 
 decrypted += decipher.final('utf8');
 // 출력합니다. 
 console.log("원본메시지: ", plaintext); 
 console.log("암호화직후: ", encrypted); 
 console.log("복호화직후: ", decrypted);