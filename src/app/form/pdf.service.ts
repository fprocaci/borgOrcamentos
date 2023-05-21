import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import { Formdata } from '../model/formdata';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  gerarPDF(formData:Formdata){
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setFont("times","arial","normal");
    
    doc.text("Orçamento de Serviço", 75, 10);
    doc.text("BorgInfo Orçamentos", 75, 20);

    doc.setFontSize(16);
    doc.setFont("times","arial","normal");
    doc.text("Empresa Responsável", 10 , 40); 

    doc.setFontSize(12);
    doc.text(`Razão Social:${formData.empresaResponsavel.razaoSocial}`, 10 , 50);
    doc.text(`Email de contato:${formData.empresaResponsavel.emailDeContato}`, 100 , 50);
    doc.text(`Celular / WhatsApp:${formData.empresaResponsavel.celularWpp}`, 10 , 60);
    doc.text(`CPF:${formData.empresaResponsavel.cpf}`, 100 , 60);
    doc.save(`Orcamento_${formData.cliente.razaoSocial}.pdf`);
    
  }
}
