import Input from "../components/input";
import SelectBox from "../components/selectBox";
import "../style/page2.css"
import list from "../service/data";
import Feature from "../components/feature";
import BigFeature from "../components/bigFeature";
import { useContext, useState } from "react";
import { Context } from "../context/context";

export function PageTwo(){
    const {char} = useContext(Context)
    const [other, setOther] =useState([])
    console.log(char)
    return (
        <main>
            <section className="formas">
                <div className="humano">
                    <p> Humano </p> 
                    <ul>
                        <br></br>
                        <li>Nenhum </li>
                        <li>Mudança</li>
                    </ul>
                </div>
                <div className="glabro"> 
                    <p> Glabro </p> 
                    <ul>
                        <li>Força: {char.atributos.forca + 2}</li>
                        <li>Destreza: {char.atributos.destreza + 2}</li>
                        <li>Vigor: {char.atributos.vigor + 2}</li>
                        <li>Manipulação: {char.atributos.manipulacao - 1}</li>
                        <li>Aparência: {char.atributos.aparencia -1}</li>
                    </ul>
                </div>
                <div className="crinos"> 
                    <p> Crinos </p> 
                    <ul>
                        <li>Força: {char.atributos.forca + 4}</li>
                        <li>Destreza: {char.atributos.destreza + 1}</li>
                        <li>Vigor: {char.atributos.vigor + 3}</li>
                        <li>Manipulação: {char.atributos.manipulacao - 3}</li>
                        <li>Aparência: {0}</li>
                    </ul>
                </div>
                <div className="hispo"> 
                    <p> Hispo </p> 
                    <ul>
                        <li>Força: {char.atributos.forca + 3}</li>
                        <li>Destreza: {char.atributos.destreza + 2}</li>
                        <li>Vigor: {char.atributos.vigor + 3}</li>
                        <li>Manipulação: {char.atributos.manipulacao - 3}</li>
                        <br></br>
                        <li>Adiciona 1 dado </li>
                        <li>de dano na mordida</li>
                    </ul>
                </div>
                <div className="lupino"> 
                    <p> Lupino </p> 
                    <ul>
                        <li>Força: {char.atributos.forca + 2}</li>
                        <li>Destreza: {char.atributos.destreza + 2}</li>
                        <li>Vigor: {char.atributos.vigor + 2}</li>
                        <li>Manipulação: {char.atributos.manipulacao - 3}</li>
                        <br></br>
                        <li>Reduz Dificuldades</li>
                        <li>de Percepção em 2</li>
                    </ul>
                </div>
            </section>
            <section className="middle">
                <div className="outrasCarac">
                    <h2>Outras Características</h2>
                    <Input cName="outro" callback={(val)=> {other[0] = val}}/> <Feature callback = {(val) => {char.outras[other[0]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[1] = val}}/> <Feature callback = {(val) => {char.outras[other[1]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[2] = val}}/> <Feature callback = {(val) => {char.outras[other[2]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[3] = val}}/> <Feature callback = {(val) => {char.outras[other[3]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[4] = val}}/> <Feature callback = {(val) => {char.outras[other[4]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[5] = val}}/> <Feature callback = {(val) => {char.outras[other[5]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[6] = val}}/> <Feature callback = {(val) => {char.outras[other[6]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[7] = val}}/> <Feature callback = {(val) => {char.outras[other[7]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[8] = val}}/> <Feature callback = {(val) => {char.outras[other[8]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[9] = val}}/> <Feature callback = {(val) => {char.outras[other[9]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[10] = val}}/> <Feature callback = {(val) => {char.outras[other[10]] = val}}/> <br></br>
                    <Input cName="outro" callback={(val)=> {other[11] = val}}/> <Feature callback = {(val) => {char.outras[other[11]] = val}}/> <br></br>
                </div>
                <div className="fetiches">
                    <h2>Fetiches</h2>
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche1.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche1.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche1.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche1.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche1.dedicado = val}} />
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche2.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche2.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche2.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche2.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche2.dedicado = val}} />
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche3.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche3.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche3.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche3.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche3.dedicado = val}} />
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche4.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche4.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche4.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche4.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche4.dedicado = val}} />
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche5.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche5.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche5.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche5.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche5.dedicado = val}} />
                    <Input cName="item" label="Item " lName="fetiche" callback={(val)=>{char.fetiches.fetiche6.item = val}} /> <Feature label="Nível " callback={(val)=>{char.fetiches.fetiche6.nivel = val}}/> <BigFeature label="Gnose " callback={(val)=>{char.fetiches.fetiche6.gnose = val}} /><br></br>
                    <Input cName="poder" lName="fetiche" label="Poder " callback={(val)=>{char.fetiches.fetiche6.poder = val}} /> <SelectBox options={[" ", "X"]} label="Dedicado" callback={(val)=>{char.fetiches.fetiche6.dedicado = val}} />
                </div>
            </section>
            <section className="middle">
                <div>
                    <h2>Dons</h2>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[12] = val}}/> <br/>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[13] = val}}/> <br/>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[14] = val}}/> <br/>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[15] = val}}/> <br/>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[16] = val}}/> <br/>
                    <Input cName="dons" callback={(val)=>{char.vantagens.dons[17] = val}}/> <br/>
                </div>
                <div>
                    <h2> Rituais  </h2>
                    <textarea onChange={(e)=> {char.rituais = e.target.value}}></textarea>
                </div>
            </section>
            <section className="final2nd">
                <table>
                    <caption>
                        <h2>Manobras de Combate</h2>
                    </caption>
                    <tbody>
                        <tr>
                            <th> Arma / Manobra</th>
                            <th> Teste / Dificuldade</th>
                            <th> Dano / Tipo</th>
                            <th> Alcance </th>
                            <th> Cadência</th>
                            <th> Pente</th>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma1.pente = val}} /></td>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma2.pente = val}} /></td>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma3.pente = val}} /></td>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma4.pente = val}} /></td>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma5.pente = val}} /></td>
                        </tr>
                        <tr>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.manobra = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.teste = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.dano = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.alcance = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.cadencia = val}} /></td>
                            <td><Input cName="tableInput" callback={(val)=>{char.armas.arma6.pente = val}} /></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h2>Armadura</h2>
                    <Feature label="Nível " callback={(val)=>{char.armadura.nivel = val}}/><br></br>
                    <Feature label="Penalidade " callback={(val) => {char.armadura.penalidade = val}} />
                    <h4> Descrição:</h4>
                    <textarea className="armor" onChange={(e)=> {char.armadura.descricao = e.target.value}}></textarea>
                </div>
            </section>
        </main>
    )
}