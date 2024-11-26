const getElement = (identifier = "") => document.querySelector(identifier);
 
function verifySubmission () {
    let phoneElement = getElement("#phone");
    let messageElement = getElement("#message");

    if (phoneElement.value === ""|| messageElement.value === "") {
        alert("Please fill in all fields");
        return false;
    } else {
        const phone = phoneElement.value;
        let message = messageElement.value;
        message = message.replace(/ /g, '10%')

        let link = 'https://api.whatsapp.com/send?phone=${phone}&text=${message}';
        window.open(link, '_blank');
    }
}
getElement("#sendButton").addEventListener("click", verifySubmission);
