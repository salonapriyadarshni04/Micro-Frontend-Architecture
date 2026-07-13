document.addEventListener("DOMContentLoaded", () => {
    const authRoot = document.getElementById("auth-root");
    authRoot.innerHTML = `
        <p>Status: <strong>Logged In as Intern</strong></p>
        <button class="btn" onclick="alert('Logging out from Auth MFE...')">Logout</button>
    `;

    const productRoot = document.getElementById("product-root");
    productRoot.innerHTML = `
        <p>Item: <strong>Premium Subscription</strong></p>
        <button class="btn" style="background-color:#dc3545;" onclick="alert('Item added from Product MFE!')">Buy Now</button>
    `;
});

