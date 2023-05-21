import { Ativo } from "./ativo";
import { Cliente } from "./cliente";
import { EmpresaResponsavel } from "./empresa-responsavel";
import { InicioTrabalho } from "./inicio-trabalho";
import { Materiais } from "./materiais";
import { Servicos } from "./servicos";
import { ValorTotal } from "./valor-total";

export class Formdata {
    empresaResponsavel:EmpresaResponsavel = new EmpresaResponsavel();
    cliente:Cliente = new Cliente();
    ativo: Ativo = new Ativo();
    inicioTrabalho: InicioTrabalho = new InicioTrabalho();
    proposta:String = "";
    servicos:Servicos[] = [];
    materiais:Materiais[] = [];
    valorTotal:ValorTotal = new ValorTotal();
    observacoes:String = "";
}
