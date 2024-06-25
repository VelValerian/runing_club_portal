document.addEventListener("DOMContentLoaded", function() {
            var messageField = document.getElementById("message");

            messageField.addEventListener("focus", function() {
                if (messageField.value === messageField.getAttribute("placeholder")) {
                    messageField.value = "";
                }
            });

            messageField.addEventListener("blur", function() {
                if (messageField.value === "") {
                    messageField.value = messageField.getAttribute("placeholder");
                }
            });
        });