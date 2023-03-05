import Input from "../components/input";
import SelectBox from "../components/selectBox";
import "../style/create.css"
import list from "../service/data";
import Feature from "../components/feature";
import BigFeature from "../components/bigFeature";

export function Create(){
    const {raca, augurio, tribo} = list
    return (
        <form>
            <header className="cabecalho">
                <Input label="Nome do Personagem" placeholder="Escreva o nome do seu personagem" type="text" />
                <SelectBox label="Raça" options={raca} name="raca" />
                <Input label="Nome da Matilha" placeholder="Escreva o nome da sua matilha" type="text" />
                <Input label="Nome do Jogador" placeholder="Escreva seu o nome" type="text" />
                <SelectBox label="Augúrio" options={augurio} type="text" />
                <Input label="Totem da Matilha" placeholder="Escreva o nome do totem da sua matilha" type="text" />
                <Input label="Crônica" placeholder="Escreva o nome da crônica" type="text" />
                <SelectBox label="Tribo" options={tribo} name="tribo" />
                <Input label="Conceito" placeholder="Escreva o conceito do seu personagem" type="text" />
            </header>
            <section>
                <h1>Atributos</h1>
                <div className="atributos">
                    <h2>Físicos</h2>
                    <h2>Sociais</h2>
                    <h2>Mentais</h2>
                    <div className="grupoAtb">
                        <Feature label='Força' start="1" name="forca" />
                        <Feature label='Destreza' start="1" name="forca" />
                        <Feature label='Vigor' start="1" name="forca" />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Carisma' start="1" name="forca" />
                        <Feature label='Manipulação' start="1" name="forca" />
                        <Feature label='Aparência' start="1" name="forca" />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Percepção' start="1" name="forca" />
                        <Feature label='Inteligência' start="1" name="forca" />
                        <Feature label='Raciocínio' start="1" name="forca" />
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
                        <Feature label='Prontidão' name="prontidao" />
                        <Feature label='Esportes' name="esportes" />
                        <Feature label='Briga' name="briga" />
                        <Feature label='Esquiva' name="esquiva" />
                        <Feature label='Empatia' name="empatia" />
                        <Feature label='Expressão' name="expressao" />
                        <Feature label='Intimidação' name="intimidacao" />
                        <Feature label='Instinto Primitivo' name="instinto-primitivo" />
                        <Feature label='Manha' name="manha" />
                        <Feature label='Lábia' name="labia" />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Emp. c/ Animais' name="emp-c-animais" />
                        <Feature label='Offícios' name="officios" />
                        <Feature label='Condução' name="conducao" />
                        <Feature label='Etiqueta' name="etiqueta" />
                        <Feature label='Armas de Fogo' name="armas-de-fogo" />
                        <Feature label='Armas Brancas' name="armas-brancas" />
                        <Feature label='Liderança' name="lideranca" />
                        <Feature label='Performance' name="performance" />
                        <Feature label='Furtividade' name="furtividde" />
                        <Feature label='Sobrevivência' name="sobrivivencia" />
                    </div>
                    <div className="grupoAtb">
                        <Feature label='Computador' name="emp-c-animais" />
                        <Feature label='Enigmas' name="officios" />
                        <Feature label='Investigação' name="conducao" />
                        <Feature label='Direito' name="etiqueta" />
                        <Feature label='Linguística' name="armas-de-fogo" />
                        <Feature label='Medicina' name="armas-brancas" />
                        <Feature label='Ocultismo' name="lideranca" />
                        <Feature label='Política' name="performance" />
                        <Feature label='Rituais' name="furtividde" />
                        <Feature label='Ciência' name="sobrivivencia" />
                    </div>
                </div>
            </section>
            <section>
                <h1>Vantagens</h1>
                <div className="vantagens">
                    <div>
                        <h2>Antecedentes</h2>
                        <Input/> <Feature /> <br/>
                        <Input/> <Feature /> <br/>
                        <Input/> <Feature /> <br/>
                        <Input/> <Feature /> <br/>
                        <Input/> <Feature /> <br/>
                        <Input/> <Feature /> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                    </div>
                    <div>
                        <h2>Dons</h2>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                        <Input cName="dons"/> <br/>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="final">
                    <h2>Renome</h2>
                    <div className="renome">
                        <h3>Glória</h3>
                        <div>
                            <BigFeature label='Permanente: '/>
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Honra</h3>
                        <div>
                            <BigFeature label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h3>Sabedoria</h3>
                        <div>
                            <BigFeature label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>
                    <div className="posto">
                        <h3>Posto</h3>
                        <SelectBox options={["1 - Cliath", "2 - Fostern", "3 - Adren", '4 - Athro', "5 - Ancião" , "6 - Grande Ancião"]} name='posto'/>
                    </div>
                </div>
                <div className="final"> 
                    <div className="renome">
                        <h2>Fúria</h2>
                        <div>
                            <BigFeature label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Gnose</h2>
                        <div>
                            <BigFeature label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>

                    <div className="renome">
                        <h2>Força de Vontade</h2>
                        <div>
                            <BigFeature label="Permanente: " />
                        </div>
                        <div>
                            <BigFeature label="Temporário: " />
                        </div>
                    </div>
                </div>

                <div className="final" >
                    <h2>Vitalidade</h2>
                    <div className="vit"> 
                        <em>Escoriado</em> <SelectBox label="0" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Machucado</em> <SelectBox label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido</em> <SelectBox label="-1" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Ferido Gravemente</em> <SelectBox label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Espancado</em> <SelectBox label="-2" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Aleijado</em> <SelectBox label="-5" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>
                    <div className="vit"> 
                        <em>Incapacitado</em> <SelectBox label="---" options={["", "/", "x", "*"]} name="vit"/> <br/>
                    </div>

                </div>
            </section>
        </form>
    )
}