
    const filmes = {
      "lilo-stitch": {
        titulo: "Lilo & Stitch",
        src: "videos/lilo-stitch.mp4",
        poster: "assets/imagens/lilo-stitch.jpg"
      },
      "invocacao": {
        titulo: "Invocação do Mal",
        src: "videos/invocacao.mp4",
        poster: "assets/imagens/invocacao.jpg"
      },
      "alerta-lobo": {
        titulo: "Alerta Lobo",
        src: "videos/alerta-lobo.mp4",
        poster: "assets/imagens/alerta-lobo.jpg"
      },
      "scooby-doo2": {
        titulo: "Scooby-Doo 2",
        src: "videos/scooby-doo2.mp4",
        poster: "assets/imagens/scooby-doo2.jpg"
      },
      "ice-road": {
        titulo: "Ice Road",
        src: "videos/ice-road.mp4",
        poster: "assets/imagens/ice-road.jpg"
      },
      "smurfs": {
        titulo: "Smurfs",
        src: "videos/smurfs.mp4",
        poster: "assets/imagens/smurfs.jpg"
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("filme");

    const tituloEl = document.getElementById("titulo-filme");
    const fonteVideoEl = document.getElementById("fonte-filme");
    const videoEl = document.getElementById("video-filme");

    if (filmes[id]) {
      tituloEl.textContent = filmes[id].titulo;
      fonteVideoEl.src = filmes[id].src;
      videoEl.poster = filmes[id].poster;
      videoEl.load();
    } else {
      tituloEl.textContent = "Filme não encontrado!";
      videoEl.style.display = "none";
    }
