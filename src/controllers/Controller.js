import nodemon from "nodemon";
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

const createAnime = (req, res) => {
    const {titulo, genero, estudio, anoLancamento, episodios, status, classificacao, temporadas} = req.body;

    const generoAnime = ["Ação", "Fantasia Sombria", "Pós-apocalíptico", "Sobrenatural", "Aventura", "Super-herói", "Artes Marciais", "Suspense", "Mistério", "Comédia", "Slice of Life" ];

    if (!titulo) {
        return res.status(400).json({
            success: false,
            message: "O campo titulo é obrigatorio"
        });
    }
    if (!genero) {
        return res.status(400).json({
            success: false,
            message: "O campo genero é obrigatorio"
        });
    }
    if (estudio) {
        return res.status(400).json({
            success: false,
            message: "O campo estudio é obrigatorio"
        });
    }
    if (anoLancamento) {
        return res.status(400).json({
            success: false,
            message: "O campo anolancamento é obrigatorio"
        });
    }
    if (episodios) {
        return res.status(400).json({
            success: false,
            message: "O campo episodio é obrigatorio"
        });
    }
    if (status) {
        return res.status(400).json({
            success: false,
            message: "O campo status é obrigatorio"
        });
    }
    if (classificacao) {
        return res.status(400).json({
            success: false,
            message: "O campo calssificação é obrigatorio"
        });
    }
    if (temporadas) {
        return res.status(400).json({
            success: false,
            message: "O campo temporada é obrigatorio"
        });
    }
    if (episodios >= 1) {
        return res.status(400).json({
            success: false,
            message: "O anime deve ter mais que um episodio"
        });
    }
    if (!status.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `O `
        });
        // voltar aqui depois
    }
    const novoAnime = {
        id: animes.length + 1,
        titulo,
        genero,
        estudio,
        anoLancamento,
        episodios,
        status,
        classificacao,
        temporadas
    };

    animes.push(novoAnime);

    res.status(201).json({
        success: true,
        message: " novo anime cadastrado com sucesso",
        data: novoAnime
    });
}

const deleteAnime = (req, res) => {
    const { id } =req.params;

    if(isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const idParaApagar = parseInt(id);

    const animeParaRemover = animes.find(c => c.id !== idParaApagar);

    if (!animeParaRemover) {
        return res.status(404).json({
            success: false,
            message: "anime com esse id não existe"
        });
    }

    const animesFiltados = animes.filter(a => a.id !== idParaApagar);

    animes.splice(0, animes.length, ...animesFiltados);

    return res.status(200).json({
        success: true,
        message: "O anim foi removido com sucesso!"
    });
}

const updateAnime = (req, res) => {
    const id = parseInt(req.params.id);
    const {titulo, genero, estudio, anoLancamento, episodios, status, classificacao, temporadas} = req.body;

    const generoAnime = ["Ação", "Fantasia Sombria", "Pós-apocalíptico", "Sobrenatural", "Aventura", "Super-herói", "Artes Marciais", "Suspense", "Mistério", "Comédia", "Slice of Life"];

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const animeExiste = animes.find(c => c.id === id);

    if (!animeExiste) {
        return res.status(404).json({
            success: false,
            message: "anime não existe"
        });
    }

    if (episodios >= 1) {
        return res.status(400).json({
            success: false,
            message: "O anime deve ter mais que 1 episodio "
        });
    }
}





// depois de tudo o export

export {getAllanimes, getAnimeById, createAnime, deleteAnime, updateAnime};