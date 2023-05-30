import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Formdata } from '../model/formdata';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() { }

  gerarPDF(formData: Formdata) {
    const imgData = '../../assets/Borginfo.png';
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont('times', 'arial', 'normal');

    doc.addImage(imgData, 'PNG', 75, 5, 58, 16);
    doc.text('Orçamento de Serviço', 75, 35);

    doc.setFontSize(16);
    doc.setFont('times', 'arial', 'normal');
    //doc.text('Empresa Responsável', 10, 45);

    doc.setFontSize(12);
    // autoTable(doc, { html: '#my-table' });

    //Empresa Responsável
    autoTable(doc, {
      margin: { top: 50 },
      body: [
        {
          razaoSocial: `${formData.empresaResponsavel.razaoSocial}`,
          email: `${formData.empresaResponsavel.emailDeContato}`,
          celularWpp: `${formData.empresaResponsavel.celularWpp}`,
          cpf: `${formData.empresaResponsavel.cpf}`
        },
      ],
      columns: [
        { header: 'Razão Social', dataKey: 'razaoSocial' },
        { header: 'E-mail de contato', dataKey: 'email' },
        { header: 'Celular / WhatsApp', dataKey: 'celularWpp' },
        { header: 'CPF', dataKey: 'cpf' },
      ],
      foot: [['Empresa Responsável']],
    });


    //Cliente
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          razaoSocial: `${formData.cliente.razaoSocial}`,
          email: `${formData.cliente.emailDeContato}`,
          celularWpp: `${formData.cliente.celularWpp}`,
          cpf: `${formData.cliente.cpf}`,
          endereco: `${formData.cliente.endereco}`
        }
      ],
      columns: [
        { header: 'Razão Social', dataKey: 'razaoSocial' },
        { header: 'E-mail de contato', dataKey: 'email' },
        { header: 'Celular / WhatsApp', dataKey: 'celularWpp' },
        { header: 'CPF', dataKey: 'cpf' },
        { header: 'Endereço', dataKey: 'endereco' },
      ],
      foot: [['Cliente']],
    });

    //Ativo
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          nome: `${formData.ativo.nome}`,
          localDoAtivo: `${formData.ativo.localDoAtivo}`,
          modelo: `${formData.ativo.modelo}`,
          marca: `${formData.ativo.marca}`,
          patrimonio: `${formData.ativo.patrimonio}`
        }
      ],
      columns: [
        { header: 'Nome', dataKey: 'nome' },
        { header: 'Local do ativo', dataKey: 'localDoAtivo' },
        { header: 'Modelo', dataKey: 'modelo' },
        { header: 'Marca', dataKey: 'marca' },
        { header: 'Patrimônio / Número de série', dataKey: 'patrimonio' }
      ],
      foot: [['Ativo']],
    });

    //Inicio do Trabalho
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          horario: `${formData.inicioTrabalho.horario}`,
          localizacao: `${formData.inicioTrabalho.localizacao}`
        }

      ],
      columns: [
        { header: 'Horário de início', dataKey: 'horario' },
        { header: 'Localização GPS', dataKey: 'localizacao' }

      ],
      foot: [['Inicio do Trabalho']],
    });


    //Proposta
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        { proposta: `${formData.proposta}` },
      ],
      columns: [
        { header: 'Proposta', dataKey: 'proposta' },
      ]
    });

    /*let servicoJsonBody: any[] = [];
    formData.servicos.forEach(servico => {
      servicoJsonBody.push(
        { codigo: `${servico.codigo}` },
        { nome: `${servico.nome}` },
        { quantidade: `${servico.quantidade}` },
        { preco: `${servico.preco}` },
        { subtotal: `${servico.subtotal}` }
      )
    });*/

    //Serviços
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          codigo: '',
          nome: '',
          quantidade: '',
          preco: '',
          subtotal: ''
        }
      ],
      columns: [
        { header: 'Código', dataKey: 'codigo' },
        { header: 'Nome', dataKey: 'nome' },
        { header: 'Quantidade', dataKey: 'quantidade' },
        { header: 'Preço unitário', dataKey: 'preco' },
        { header: 'Subtotal', dataKey: 'subtotal' }
      ],
      foot: [['Serviços a Realizar']],
    });

    //Peças
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          codigo: '',
          nome: '',
          quantidade: '',
          preco: '',
          subtotal: ''
        }
      ],
      columns: [
        { header: 'Código', dataKey: 'codigo' },
        { header: 'Nome', dataKey: 'nome' },
        { header: 'Quantidade', dataKey: 'quantidade' },
        { header: 'Preço unitário', dataKey: 'preco' },
        { header: 'Subtotal', dataKey: 'subtotal' }
      ],
      foot: [['Peças/Materiais']],
    });

    //Valor Total
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        {
          valorServico: `${formData.valorTotal.valorServico}`,
          valorMateriais: `${formData.valorTotal.valorMateriais}`,
          valorTotal: `${formData.valorTotal.valorTotal}`
        }
      ],
      columns: [
        { header: 'Valor dos serviços em reais (R$)', dataKey: 'valorServico' },
        { header: 'Valor doa materiais/peças em reais (R$)', dataKey: 'valorMateriais' },
        { header: 'Valor total em reais (R$)', dataKey: 'valorTotal' },

      ],
      foot: [['Valor Total']],
    });

    //Proposta
    autoTable(doc, {
      margin: { top: 20 },
      body: [
        { proposta: `${formData.observacoes}` },
      ],
      columns: [
        { header: 'Observações', dataKey: 'observacoes' },
      ]
    });

    /*autoTable(doc, {
      styles: { fillColor: [255, 0, 0] },
      columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, // Cells in first column centered and green
      margin: { top: 10 },
      body: [
        [
          `Razão Social:${formData.empresaResponsavel.razaoSocial}`,
          `Email de contato:${formData.empresaResponsavel.emailDeContato}`,
        ],
        ['Norway', 'China', 'USA'],
        ['Denmark', 'China', 'Mexico'],
      ],
    });

    autoTable(doc, {
      columnStyles: { europe: { halign: 'center' } }, // European countries centered
      body: [
        { europe: 'Sweden', america: 'Canada', asia: 'China' },
        { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
      ],
      columns: [{ header: 'Europe', dataKey: 'europe, asia, america' }, {}],
    }); */

    doc.save(`Orcamento_${formData.cliente.razaoSocial}.pdf`);
  }
}
