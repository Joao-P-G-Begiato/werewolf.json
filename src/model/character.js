export default class Char {
    constructor(nome, jogador, cronica, raca, augurio, tribo, matilha, totem, conceito, forca, destreza, vigor, carisma, manipulacao, aparencia, percepecao, inteligencia, raciocinio, talentos, pericias, conhecimentos, antecedentes, dons, gloriap , gloriat, honrap, honrat, sabedoriap, sabedoriat, furiap, furiat, gnosep, gnoset, fdvp, fdvt, vit){
        this.nome = nome, 
        this.jogador = jogador, 
        this.cronica = cronica, 
        this.raca = raca, 
        this.augurio = augurio, 
        this.tribo = tribo, 
        this.matilha = matilha, 
        this.totem = totem, 
        this.conceito = conceito, 
        this.forca = forca, 
        this.destreza = destreza, 
        this.vigor = vigor, 
        this.carisma = carisma, 
        this.manipulacao = manipulacao, 
        this.aparencia = aparencia,  
        this.percepecao = percepecao,
        this.inteligencia = inteligencia,
        this.raciocinio = raciocinio,
        this.talentos = talentos, 
        this.pericias = pericias, 
        this.conhecimentos = conhecimentos, 
        this.antecedentes = antecedentes, 
        this.dons = dons, 
        this.gloriap = gloriap , 
        this.gloriat = gloriat, 
        this.honrap = honrap, 
        this.honrat = honrat, 
        this.sabedoriap = sabedoriap, 
        this.sabedoriat = sabedoriat, 
        this.furiap = furiap, 
        this.furiat = furiat, 
        this.gnosep = gnosep, 
        this.gnoset = gnoset, 
        this.fdvp = fdvp, 
        this.fdvt = fdvt, 
        this.vit = vit
    }
}


const teste = new Char ("nome", "jogador", "cronica", "hominideo", "ahroun", "cria de fenris", "matilha", "totem", "conceito", "2", "2", "3", "2", "2", "3", "4", "5", ["0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0"], ["0","0","0","0","0","0","0","0","0","0"], {"antecedentes": 1, "antecedente2" : 4}, ["dons" , "dons"], "0" , "1", "0", "1", "2", "1", "1", "2", "2", "1", "1", "0", [" ", " ", " ", " ", " ", " ", " "])

console.log(Object.values(teste))