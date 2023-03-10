import Input from "../components/input";
import SelectBox from "../components/selectBox";
import "../style/create.css"
import list from "../service/data";
import Feature from "../components/feature";
import BigFeature from "../components/bigFeature";
import { useContext } from "react";
import { Context } from "../context/context";

export function Create(){
    const {raca, augurio, tribo} = list
    const {char} = useContext(Context)
    const background = []
    console.log(char)
    return (
        <form>
            <header className="cabecalho">
                <Input label="Nome do Personagem" placeholder="Escreva o nome do seu personagem" type="text" callback={(name)=>{char.cabecalho.nome = name}} />
                <SelectBox label="Raça" options={raca} name="raca" callback={(race)=>{char.cabecalho.raca = race}}/>
                <Input label="Nome da Matilha" placeholder="Escreva o nome da sua matilha" type="text" callback={(pack)=>{char.cabecalho.matilha = pack}}/>
                <Input label="Nome do Jogador" placeholder="Escreva seu o nome" type="text" callback={(palyer)=>{char.cabecalho.jogador = palyer}} />
                <SelectBox label="Augúrio" options={augurio} type="text" callback={(auspice)=>{char.cabecalho.augurio = auspice}}/>
                <Input label="Totem da Matilha" placeholder="Escreva o nome do totem da sua matilha" type="text" callback={(totem)=>{char.cabecalho.totem = totem}}/>
                <Input label="Crônica" placeholder="Escreva o nome da crônica" type="text" callback={(chronic)=>{char.cabecalho.cronica = chronic}} />
                <SelectBox label="Tribo" options={tribo} name="tribo" callback={(tribe)=>{char.cabecalho.tribo = tribe}}/>
                <Input label="Conceito" placeholder="Escreva o conceito do seu personagem" type="text" callback={(concept)=>{char.cabecalho.conceito = concept}} />
            </header>
            <section>
                <h1>Atributos</h1>
                <div className="atributos">
                    <h2>Físicos</h2>
                    <h2>Sociais</h2>
                    <h2>Mentais</h2>
                    <div className="grupoAtb">
                        <Feature label='Força' start="1" name="forca" callback={(str)=>{char.atributos.forca = Number(str)}} />
                        <Feature label='Destreza' start="1" name="destreza" callback={(dex)=>{char.atributos.destreza = Number(dex)}} />
                        <Feature label='Vigor' start="1" name="vigor" callback={(vit)=>{char.atributos.vigor = Number(vit)}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Carisma' start="1" name="carisma" callback={(cha)=>{char.atributos.carisma = Number(cha)}}/>
                        <Feature label='Manipulação' start="1" name="manipulacao" callback={(man)=>{char.atributos.manipulacao = Number(man)}}/>
                        <Feature label='Aparência' start="1" name="aparencia" callback={(app)=>{char.atributos.aparencia = Number(app)}}/>
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Percepção' start="1" name="percepecao" callback={(per)=>{char.atributos.percepecao = Number(per)}} />
                        <Feature label='Inteligência' start="1" name="inteligencia" callback={(int)=>{char.atributos.inteligencia = Number(int)}} />
                        <Feature label='Raciocínio' start="1" name="raciocinio" callback={(rea)=>{char.atributos.raciocinio = Number(rea)}} />
                    </div>
                </div>
            </section>
            <section>
                <h1>Habilidades</h1>
                <div className="atributos">
                    <h2>Talentos</h2>
                    <h2>Perícias</h2>
                    <h2>Conhecimentos</h2>
                    <div className="grupoAtb">
                        <Feature label='Prontidão' name="prontidao" callback={(val)=>{char.habilidades.talentos.prontidao = Number(val)}} />
                        <Feature label='Esportes' name="esportes" callback={(val)=>{char.habilidades.talentos.esportes = Number(val)}} />
                        <Feature label='Briga' name="briga" callback={(val)=>{char.habilidades.talentos.briga = Number(val)}}/>
                        <Feature label='Esquiva' name="esquiva" callback={(val)=>{char.habilidades.talentos.esquiva = Number(val)}} />
                        <Feature label='Empatia' name="empatia" callback={(val)=>{char.habilidades.talentos.empatia = Number(val)}}/>
                        <Feature label='Expressão' name="expressao" callback={(val)=>{char.habilidades.talentos.expressao = Number(val)}}/>
                        <Feature label='Intimidação' name="intimidacao" callback={(val)=>{char.habilidades.talentos.intimidacao = Number(val)}} />
                        <Feature label='Instinto Primitivo' name="instinto-primitivo" callback={(val)=>{char.habilidades.talentos.instinto = Number(val)}} />
                        <Feature label='Manha' name="manha" callback={(val)=>{char.habilidades.talentos.manha = Number(val)}} />
                        <Feature label='Lábia' name="labia" callback={(val)=>{char.habilidades.talentos.labia = Number(val)}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Emp. c/ Animais' name="emp-c-animais" callback={(val)=>{char.habilidades.pericias.animais = Number(val)}} />
                        <Feature label='Offícios' name="officios" callback={(val)=>{char.habilidades.pericias.officios = Number(val)}} />
                        <Feature label='Condução' name="conducao" callback={(val)=>{char.habilidades.pericias.conducao = Number(val)}} />
                        <Feature label='Etiqueta' name="etiqueta" callback={(val)=>{char.habilidades.pericias.etiqueta = Number(val)}} />
                        <Feature label='Armas de Fogo' name="armas-de-fogo" callback={(val)=>{char.habilidades.pericias.armasDeFogo = Number(val)}} />
                        <Feature label='Armas Brancas' name="armas-brancas" callback={(val)=>{char.habilidades.pericias.armasBrancas = Number(val)}} />
                        <Feature label='Liderança' name="lideranca" callback={(val)=>{char.habilidades.pericias.lideranca = Number(val)}} />
                        <Feature label='Performance' name="performance" callback={(val)=>{char.habilidades.pericias.performance = Number(val)}} />
                        <Feature label='Furtividade' name="furtividade" callback={(val)=>{char.habilidades.pericias.furtividade = Number(val)}} />
                        <Feature label='Sobrevivência' name="sobrevivencia" callback={(val)=>{char.habilidades.pericias.sobrevivencia = Number(val)}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Computador' name="emp-c-animais" callback={(val)=>{char.habilidades.conhecimentos.computador = Number(val)}} />
                        <Feature label='Enigmas' name="officios" callback={(val)=>{char.habilidades.conhecimentos.enigmas = Number(val)}} />
                        <Feature label='Investigação' name="conducao" callback={(val)=>{char.habilidades.conhecimentos.investigacao = Number(val)}} />
                        <Feature label='Direito' name="etiqueta" callback={(val)=>{char.habilidades.conhecimentos.direito = Number(val)}} />
                        <Feature label='Linguística' name="armas-de-fogo" callback={(val)=>{char.habilidades.conhecimentos.linguistica = Number(val)}} />
                        <Feature label='Medicina' name="armas-brancas" callback={(val)=>{char.habilidades.conhecimentos.medicina = Number(val)}} />
                        <Feature label='Ocultismo' name="lideranca" callback={(val)=>{char.habilidades.conhecimentos.ocultismo = Number(val)}} />
                        <Feature label='Política' name="performance" callback={(val)=>{char.habilidades.conhecimentos.politica = Number(val)}} />
                        <Feature label='Rituais' name="furtividde" callback={(val)=>{char.habilidades.conhecimentos.rituais = Number(val)}} />
                        <Feature label='Ciência' name="sobrivivencia" callback={(val)=>{char.habilidades.conhecimentos.ciencia = Number(val)}} />
                    </div>
                </div>
            </section>
            <section>
                <h1>Vantagens</h1>
                <div className="vantagens">
                    <div>
                        <h2>Antecedentes</h2>
                        <Input callback={(val)=> {background[0] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[0]] = Number(val)}} /> <br/>
                        <Input callback={(val)=> {background[1] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[1]] = Number(val)}} /> <br/>
                        <Input callback={(val)=> {background[2] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[2]] = Number(val)}} /> <br/>
                        <Input callback={(val)=> {background[3] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[3]] = Number(val)}} /> <br/>
                        <Input callback={(val)=> {background[4] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[4]] = Number(val)}} /> <br/>
                        <Input callback={(val)=> {background[5] = val}}/> <Feature callback={(val)=>{char.vantagens.antecedentes[background[5]] = Number(val)}} /> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[0] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[1] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[2] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[3] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[4] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[5] = val}}/> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[6] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[7] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[8] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[9] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[10] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.vantagens.dons[11] = val}}/> <br/>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="final">
                    <h2>Renome</h2>
                    <div className="renome">
                        <h3>Glória</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.gloria.permanente = Number(val)}} label='Permanente: '/>
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.gloria.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Honra</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.honra.permanente = Number(val)}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.honra.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Sabedoria</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.sabedoria.permanente = Number(val)}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.renome.sabedoria.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>
                    <div className="posto">
                        <h3>Posto</h3>
                        <SelectBox callback={(val)=>{char.vantagens.renome.posto = val}} options={["1 - Cliath", "2 - Fostern", "3 - Adren", '4 - Athro', "5 - Ancião" , "6 - Grande Ancião"]} name='posto'/>
                    </div>
                </div>
                <div className="final"> 
                    <div className="renome">
                        <h2>Fúria</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.furia.permanente = Number(val)}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.furia.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Gnose</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.gnose.permanente = Number(val)}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.gnose.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Força de Vontade</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.vontade.permanente = Number(val)}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.vantagens.vontade.temporaria = Number(val)}} label="Temporário: " />
                        </div>
                    </div>
                </div>

                <div className="final" >
                    <h2>Vitalidade</h2>
                    <div className="vit"> 
                        <em>Escoriado</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[0] = val}} label="0" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Machucado</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[1] = val}} label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[2] = val}} label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido Gravemente</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[3] = val}} label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Espancado</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[4] = val}} label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Aleijado</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[5] = val}} label="-5" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Incapacitado</em> <SelectBox callback={(val)=>{char.vantagens.vitalidade[6] = val}} label="---" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>

                </div>
            </section>
        </form>
    )
}