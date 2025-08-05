# EmailJS Setup Instructions

## Replace These Values in script.js:

1. **Line ~250**: Replace `YOUR_PUBLIC_KEY` with your actual public key
2. **Line ~261**: Replace `YOUR_SERVICE_ID` with your Gmail service ID  
3. **Line ~261**: Replace `YOUR_TEMPLATE_ID` with your template ID

## Example:
```javascript
// Initialize EmailJS
(function() {
    emailjs.init("user_123abc456def"); // Your actual public key
})();

// In handleContactForm function:
emailjs.sendForm('service_gmail123', 'template_contact456', form)
```

## Your Values (fill these in after EmailJS setup):
- **Public Key**: `_________________`
- **Service ID**: `_________________` 
- **Template ID**: `_________________`

## Gmail Configuration:
Make sure your Gmail account allows "Less secure apps" or use App Passwords for better security.

## Testing:
After updating the values, test the contact form. Check your Gmail inbox for messages. 