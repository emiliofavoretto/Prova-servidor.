import dados from "../models/dados.js";
const { animes } = dados;

const getAllanimes = (req, res) => {
    let resultado = animes;

    res.status(200).json({
        total: resultado.length,
        dta:resultado
    });
}

const getAnimeById = (req, res) => {
    const id = parseInt(req.params.id);
    const anime = animes.find(a => caches.id === id);

    if (!anime) {
        return res.status(404).json({
            success: false,
            message:`anime não encontrado, id: ${id}`
        });
    }

    res.status(200).json({
        total: 1,
        data: anime
    });
}





// depois de tudo o export

export {getAllanimes, getAnimeById}