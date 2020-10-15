function change_response() {
    message = document.querySelector("#message").value;
    console.log(document.querySelector("#response"));
    if (message) {
        document.querySelector("#response").textContent = response(message);
        const lr = document.querySelector("#response").dataset.lastResp;
        document.querySelector("#instruction").textContent = instruction(message, lr);
        document.querySelector("#response").dataset.lastResp = newResponse(message, lr)

    } else {
        document.querySelector("#response").textContent = "Ecrivez nous un message !";
    }
}
//change_message();

document.querySelector("#button-send").addEventListener("click", (event) => {
    change_response();
    event.preventDefault();
});
