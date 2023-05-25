import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Formdata } from '../model/formdata';
import autoTable from 'jspdf-autotable';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  constructor() {}

  gerarPDF(formData: Formdata) {
    const imgData = '../../assets/Borginfo.png';
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont('times', 'arial', 'normal');

    doc.addImage(imgData, 'PNG', 75, 5, 58, 16);
    doc.text('Orçamento de Serviço', 75, 35);

    doc.setFontSize(16);
    doc.setFont('times', 'arial', 'normal');
    // doc.text('Empresa Responsável', 10, 40);

    doc.setFontSize(12);
    // autoTable(doc, { html: '#my-table' });
    autoTable(doc, {
      margin: { top: 50 },
      head: [['Empresa Responsável']],
      body: [
        [
          `Razão Social:${formData.empresaResponsavel.razaoSocial}`,
          `Email de contato:${formData.empresaResponsavel.emailDeContato}`,
        ],
        // [
        //   `Celular / WhatsApp:${formData.empresaResponsavel.celularWpp}`,
        //   `CPF:${formData.empresaResponsavel.cpf}`,
        // ],
        // ...
      ],
    });

    autoTable(doc, {
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
    });

    doc.save(`Orcamento_${formData.cliente.razaoSocial}.pdf`);
  }
}
