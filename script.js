document.getElementById("btnBuscar").addEventListener("click", function () {
    
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        .then(res => res.json())
        .then(posts => {

        // Convertendo para padrão JSON:API
        const jsonApiFormat = {
            data: posts.map(post => ({
                type: "posts",
                id: post.id,
                attributes: {
                    title: post.title,
                    body: post.body,
                },
                relationships: {
                    author: {
                        data: {
                            type: "users",
                            id: post.userId
                        }
                    }
                }
            }))
        };

        document.getElementById("saida").textContent =
        JSON.stringify(jsonApiFormat, null, 4);

    })
    .catch(erro => {
        console.log("Erro:", erro);
    });
});