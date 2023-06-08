console.log('Work from script file from django')
password = document.querySelector('h2')
password.addEventListener('click', (e) => {
    console.log(e.target)
    navigator.clipboard.writeText(`${password.innerHTML}`)
        .then(() => {
            alert('Copied!!!')
        })
        .catch(err => console.log(err))
})