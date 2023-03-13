export default class Char {
    constructor(){
        this.cabecalho = {
            nome : " ",
            jogador: " ",
            cronica: " ",
            augurio: " ",
            tribo: " ",
            raca: " ",
            matilha: " ",
            totem: " ",
            conceito: " "
        },
        this.atributos = {
            forca: 1,
            destreza: 1,
            vigor: 1,
            carisma: 1,
            manipulacao: 1,
            aparencia: 1,
            percepecao: 1,
            inteligencia: 1,
            raciocinio: 1,
        },
        this.habilidades ={
            talentos: {
                prontidao: 0,
                esportes: 0,
                briga: 0,
                esquiva: 0,
                empatia:0,
                expressao: 0,
                intimidacao: 0,
                instinto: 0,
                manha:0,
                labia: 0
            },
            pericias: {
                animais : 0,
                officios : 0,
                conducao : 0,
                etiqueta : 0,
                armasDeFogo : 0,
                armasBrancas : 0,
                lideranca : 0,
                performance : 0,
                furtividade : 0,
                sobrevivencia : 0
            },
            conhecimentos: {
                computador : 0, 
                enigmas : 0, 
                investigacao : 0, 
                direito : 0, 
                linguistica : 0, 
                medicina : 0, 
                ocultismo : 0, 
                politica : 0, 
                rituais : 0,
                ciencia : 0
            }
        },
        this.vantagens = {
            antecedentes : {},
            dons: [],
            renome : {
                gloria : {
                    permanente: 0,
                    temporaria: 0
                },
                honra: {
                    permanente: 0,
                    temporaria: 0
                },
                sabedoria: {
                    permanente: 0,
                    temporaria: 0
                },
                posto: "1 - cliath"
            },
            furia : {
                permanente: 0,
                temporaria: 0
            },
            gnose : {
                permanente: 0,
                temporaria: 0
            },
            vontade : {
                permanente: 0,
                temporaria: 0
            },
            vitalidade : [" "," "," "," "," "," "," " ]
        },
        this.rituais = " "
        this.outras = {}
        this.fetiches ={
            fetiche1 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            },
            fetiche2 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            },
            fetiche3 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            },
            fetiche4 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            },
            fetiche5 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            },
            fetiche6 : {
                item: "",
                poder: "",
                gnose: 0,
                nivel: 0,
                dedicado: ""
            }
        },
        this.armas = {
            arma1 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
            arma2 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
            arma3 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
            arma4 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
            arma5 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
            arma6 : {
                manobra : " ",
                teste : " ",
                dano : " ",
                alcance : " ",
                cadencia : " ",
                pente : " "
            }, 
        },
        this.armadura = {
            nivel: 0,
            penalidade: 0,
            descricao: " "
        }
    }
}

