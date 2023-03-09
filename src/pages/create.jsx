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
                <Input label="Nome do Personagem" placeholder="Escreva o nome do seu personagem" type="text" callback={(name)=>{char.nome = name}} />
                <SelectBox label="Raça" options={raca} name="raca" callback={(race)=>{char.raca = race}}/>
                <Input label="Nome da Matilha" placeholder="Escreva o nome da sua matilha" type="text" callback={(pack)=>{char.matilha = pack}}/>
                <Input label="Nome do Jogador" placeholder="Escreva seu o nome" type="text" callback={(palyer)=>{char.jogador = palyer}} />
                <SelectBox label="Augúrio" options={augurio} type="text" callback={(auspice)=>{char.augurio = auspice}}/>
                <Input label="Totem da Matilha" placeholder="Escreva o nome do totem da sua matilha" type="text" callback={(totem)=>{char.totem = totem}}/>
                <Input label="Crônica" placeholder="Escreva o nome da crônica" type="text" callback={(chronic)=>{char.cronica = chronic}} />
                <SelectBox label="Tribo" options={tribo} name="tribo" callback={(tribe)=>{char.tribo = tribe}}/>
                <Input label="Conceito" placeholder="Escreva o conceito do seu personagem" type="text" callback={(concept)=>{char.conceito = concept}} />
            </header>
            <section>
                <h1>Atributos</h1>
                <div className="atributos">
                    <h2>Físicos</h2>
                    <h2>Sociais</h2>
                    <h2>Mentais</h2>
                    <div className="grupoAtb">
                        <Feature label='Força' start="1" name="forca" callback={(strength)=>{char.forca = strength}} />
                        <Feature label='Destreza' start="1" name="destreza" callback={(dex)=>{char.destreza = dex}} />
                        <Feature label='Vigor' start="1" name="vigor" callback={(vit)=>{char.vigor = vit}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Carisma' start="1" name="carisma" callback={(cha)=>{char.carisma = cha}}/>
                        <Feature label='Manipulação' start="1" name="manipulacao" callback={(man)=>{char.manipulacao = man}}/>
                        <Feature label='Aparência' start="1" name="aparencia" callback={(app)=>{char.aparencia = app}}/>
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Percepção' start="1" name="percepecao" callback={(per)=>{char.percepecao = per}} />
                        <Feature label='Inteligência' start="1" name="inteligencia" callback={(int)=>{char.inteligencia = int}} />
                        <Feature label='Raciocínio' start="1" name="raciocinio" callback={(rea)=>{char.raciocinio = rea}} />
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
                        <Feature label='Prontidão' name="prontidao" callback={(val)=>{char.talentos[0] = val}} />
                        <Feature label='Esportes' name="esportes" callback={(val)=>{char.talentos[1] = val}} />
                        <Feature label='Briga' name="briga" callback={(val)=>{char.talentos[2] = val}}/>
                        <Feature label='Esquiva' name="esquiva" callback={(val)=>{char.talentos[3] = val}} />
                        <Feature label='Empatia' name="empatia" callback={(val)=>{char.talentos[4] = val}}/>
                        <Feature label='Expressão' name="expressao" callback={(val)=>{char.talentos[5] = val}}/>
                        <Feature label='Intimidação' name="intimidacao" callback={(val)=>{char.talentos[6] = val}} />
                        <Feature label='Instinto Primitivo' name="instinto-primitivo" callback={(val)=>{char.talentos[7] = val}} />
                        <Feature label='Manha' name="manha" callback={(val)=>{char.talentos[8] = val}} />
                        <Feature label='Lábia' name="labia" callback={(val)=>{char.talentos[9] = val}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Emp. c/ Animais' name="emp-c-animais" callback={(val)=>{char.pericias[0] = val}} />
                        <Feature label='Offícios' name="officios" callback={(val)=>{char.pericias[1] = val}} />
                        <Feature label='Condução' name="conducao" callback={(val)=>{char.pericias[2] = val}} />
                        <Feature label='Etiqueta' name="etiqueta" callback={(val)=>{char.pericias[3] = val}} />
                        <Feature label='Armas de Fogo' name="armas-de-fogo" callback={(val)=>{char.pericias[4] = val}} />
                        <Feature label='Armas Brancas' name="armas-brancas" callback={(val)=>{char.pericias[5] = val}} />
                        <Feature label='Liderança' name="lideranca" callback={(val)=>{char.pericias[6] = val}} />
                        <Feature label='Performance' name="performance" callback={(val)=>{char.pericias[7] = val}} />
                        <Feature label='Furtividade' name="furtividde" callback={(val)=>{char.pericias[8] = val}} />
                        <Feature label='Sobrevivência' name="sobrivivencia" callback={(val)=>{char.pericias[9] = val}} />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Computador' name="emp-c-animais" callback={(val)=>{char.conhecimentos[0] = val}} />
                        <Feature label='Enigmas' name="officios" callback={(val)=>{char.conhecimentos[1] = val}} />
                        <Feature label='Investigação' name="conducao" callback={(val)=>{char.conhecimentos[2] = val}} />
                        <Feature label='Direito' name="etiqueta" callback={(val)=>{char.conhecimentos[3] = val}} />
                        <Feature label='Linguística' name="armas-de-fogo" callback={(val)=>{char.conhecimentos[4] = val}} />
                        <Feature label='Medicina' name="armas-brancas" callback={(val)=>{char.conhecimentos[5] = val}} />
                        <Feature label='Ocultismo' name="lideranca" callback={(val)=>{char.conhecimentos[6] = val}} />
                        <Feature label='Política' name="performance" callback={(val)=>{char.conhecimentos[7] = val}} />
                        <Feature label='Rituais' name="furtividde" callback={(val)=>{char.conhecimentos[8] = val}} />
                        <Feature label='Ciência' name="sobrivivencia" callback={(val)=>{char.conhecimentos[9] = val}} />
                    </div>
                </div>
            </section>
            <section>
                <h1>Vantagens</h1>
                <div className="vantagens">
                    <div>
                        <h2>Antecedentes</h2>
                        <Input callback={(val)=> {background[0] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[0]] = val}} /> <br/>
                        <Input callback={(val)=> {background[1] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[1]] = val}} /> <br/>
                        <Input callback={(val)=> {background[2] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[2]] = val}} /> <br/>
                        <Input callback={(val)=> {background[3] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[3]] = val}} /> <br/>
                        <Input callback={(val)=> {background[4] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[4]] = val}} /> <br/>
                        <Input callback={(val)=> {background[5] = val}}/> <Feature callback={(val)=>{char.antecedentes[background[5]] = val}} /> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons" callback={(val)=>{char.dons[0] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[1] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[2] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[3] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[4] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[5] = val}}/> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons" callback={(val)=>{char.dons[6] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[7] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[8] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[9] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[10] = val}}/> <br/>
                        <Input cName="dons" callback={(val)=>{char.dons[11] = val}}/> <br/>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="final">
                    <h2>Renome</h2>
                    <div className="renome">
                        <h3>Glória</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.gloriap = val}} label='Permanente: '/>
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.gloriat = val}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Honra</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.honrap = val}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.honrat = val}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Sabedoria</h3>
                        <div>
                            <BigFeature callback={(val)=>{char.sabedoriap = val}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.sabedoriap = val}} label="Temporário: " />
                        </div>
                    </div>
                    <div className="posto">
                        <h3>Posto</h3>
                        <SelectBox callback={(val)=>{char.posto = val}} options={["1 - Cliath", "2 - Fostern", "3 - Adren", '4 - Athro', "5 - Ancião" , "6 - Grande Ancião"]} name='posto'/>
                    </div>
                </div>
                <div className="final"> 
                    <div className="renome">
                        <h2>Fúria</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.furiap = val}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.furiat = val}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Gnose</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.gnosep = val}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.gnoset = val}} label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Força de Vontade</h2>
                        <div>
                            <BigFeature callback={(val)=>{char.fdvp = val}} label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature callback={(val)=>{char.fdvt = val}} label="Temporário: " />
                        </div>
                    </div>
                </div>

                <div className="final" >
                    <h2>Vitalidade</h2>
                    <div className="vit"> 
                        <em>Escoriado</em> <SelectBox callback={(val)=>{char.vit[0] = val}} label="0" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Machucado</em> <SelectBox callback={(val)=>{char.vit[1] = val}} label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido</em> <SelectBox callback={(val)=>{char.vit[2] = val}} label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido Gravemente</em> <SelectBox callback={(val)=>{char.vit[3] = val}} label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Espancado</em> <SelectBox callback={(val)=>{char.vit[4] = val}} label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Aleijado</em> <SelectBox callback={(val)=>{char.vit[5] = val}} label="-5" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Incapacitado</em> <SelectBox callback={(val)=>{char.vit[6] = val}} label="---" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>

                </div>
            </section>
        </form>
    )
}