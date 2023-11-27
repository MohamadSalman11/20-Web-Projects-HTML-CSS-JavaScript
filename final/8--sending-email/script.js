const form = document.querySelector("form");

async function handleSubmit(event) {
  try {
    event.preventDefault();
    // send request
    const data = new FormData(event.target);
    const res = await fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    // check response
    if (res.ok) {
      alert("Thanks for your submission!");
      form.reset();
    }
    if (!res.ok) alert("Oops! Something went wrong 💥💥");
    //catch errors
  } catch (err) {
    alert("Oops! There was a problem submitting your form", err);
  }
}
form.addEventListener("submit", handleSubmit);
