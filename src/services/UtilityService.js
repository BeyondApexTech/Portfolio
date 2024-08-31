import emailjs from 'emailjs-com';

export const sendEmail = (name, email, subject, message) => {
    return new Promise((resolve, reject) => {
        const serviceID = 'service_hnersjd';
        const templateID = 'template_8m1l6fg';

        let msg = ""
        msg = "Contact Email : " + email
        msg += "\n Subject : " + subject
        msg += "\n Message : " + message

        const payload = {
            to_name: "Beyond Apex Tech",
            from_name: name,
            message: msg
        }

        emailjs.send(
            serviceID,
            templateID,
            payload,
            'Jc68qO-0WaSz3y1rk'
        )
            .then((response) => {
                if (response.status === 200) {
                    alert("Thank you! We have received your request successfully. We will reach out to you as soon as possible.")
                    resolve()
                } else {
                    alert("Failed to submit your request, Please try again.")
                    reject()
                }
            })
            .catch((error) => {
                alert("Failed to submit your request, Please try again.")
                reject()
            });
    })
}