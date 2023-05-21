import { Component, OnInit } from '@angular/core';
import { Formdata } from '../model/formdata';
import { Materiais } from '../model/materiais';
import { Servicos } from '../model/servicos';
import { jsPDF } from "jspdf";
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  formData:Formdata = new Formdata();
  materiais:Materiais = new Materiais();
  servicos: Servicos = new Servicos();
  
  constructor(public pdfService:PdfService){


  }

  incluiServico(servico: Servicos){
    this.formData.servicos.push(servico)
    this.servicos = new Servicos();
  }

  incluiMateriais(material:Materiais){
    this.formData.materiais.push(material);
    this.materiais = new Materiais();
  }

  gerarPDF(){
    this.pdfService.gerarPDF(this.formData);
  }
  
  ngOnInit(): void {
    
  }
}
