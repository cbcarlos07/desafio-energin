import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Mensagem } from 'src/app/shared/retorno.model';
import { NotificationService } from 'src/app/shared/snackbar/notification.service';
import { ImoveisService } from '../imoveis.service';
import { Imovel } from '../imovel.model';

@Component({
  selector: 'app-form-imoveis',
  templateUrl: './form-imoveis.component.html',
  styleUrls: ['./form-imoveis.component.css']
})
export class FormImoveisComponent implements OnInit {
  subtitle: string = 'Cadastro de Imóveis'
  typeFilse = ['image/png','image/jpg', 'image/jpeg']
  @ViewChild('fileList') fileList: any;
  msgError: string
  files: any[] = []
  form: FormGroup
  id: number
  constructor(private _sanitizer: DomSanitizer,
              private _imoveisService: ImoveisService,
              private _location: Location,
              private _notificationService: NotificationService,
              private _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(undefined, {validators: [Validators.required]}),
      value: new FormControl(undefined, {validators: [Validators.required]}),
      picture: new FormControl(undefined, {validators: [Validators.required]}),
      namePic: new FormControl(undefined, {validators: [Validators.required]}),
    })
    this.id = this._activatedRouter.snapshot.params['id'] || 0
    if( this.id > 0 ){
      this.buscarDados()
      this.subtitle = 'Atualizar cadastro'
    }
  }

  buscarDados(){
    this._imoveisService
        .readId(this.id)
        .subscribe((response: Imovel)=>{
          this.form.controls['name'].setValue(response.name)
          this.form.controls['value'].setValue(response.value)
          this.form.controls['picture'].setValue(response.picture)
          this.form.controls['namePic'].setValue(response.namePic)

                  
          const blob = this.base64ToBlob(response.picture);
          const blobUrl = URL.createObjectURL(blob);
          
          this.files.push({
            conteudo: response.picture,
            arquivo: this.formatFileName( response.namePic || '' ),
            url: this._sanitizer.bypassSecurityTrustUrl(blobUrl),
            size: blob.size,
            fileName: response.namePic
          })
        })
  }

  base64ToBlob(base64: string, contentType='image/png', chunkLength=512) {
    const byteCharsArray = Array.from(atob(base64));
    const chunksIterator = new Array(Math.ceil(byteCharsArray.length / chunkLength));
    const bytesArrays = [];

    for (let c = 0; c < chunksIterator.length; c++) {
        bytesArrays.push(new Uint8Array(byteCharsArray.slice(c * chunkLength, chunkLength * (c + 1)).map(s => s.charCodeAt(0))));
    }

    const blob = new Blob(bytesArrays, {type: contentType});
    
    return blob;
}

  submit(){
    if( this.id > 0 ){
      this.update()
    }else{
      this.novo()
    }
  }

  update(){
    this._imoveisService
        .update(this.id, this.form.value)
        .subscribe((response: Mensagem)=>{
            this._notificationService.notify(response.msg)
            this._location.back()
        })
  }

  novo(){
    this._imoveisService.create(this.form.value)
        .subscribe((response: Mensagem)=>{
            this._notificationService.notify(response.msg)
            this._location.back()
        })
  }

  readFile(event: any){
    const files = event.target.files
    console.log(event);
    console.log(files);
    
    for(let index = 0; index < files.length; index++){

      if( this.typeFilse.includes( files[index].type) ){
        
        this.anexar(files, index)
      }else{
        this.msgError = 'Extensão não é aceita. Extensão aceita é JPG e PNG'
      }
    }
  }

  anexar(files: any, index: number){
    let reader = new FileReader();
    
    
    reader.onload = e => {
      const url = window.URL.createObjectURL(
        new Blob(files, {
          type: files[0].type
        })
      )
      const hasFile = this.files.find(
        file => file.fileName == files[index].name
      )

      if(!hasFile){
        this.files.push({
          conteudo: e.target?.result?.toString().split('base64')[1],
          arquivo: this.formatFileName(files[index].name),
          url: this._sanitizer.bypassSecurityTrustUrl(url),
          size: files[index].size,
          fileName: files[index].name
        })
        this.form.controls['picture'].setValue( this.files[index].conteudo )
        this.form.controls['namePic'].setValue( this.files[index].fileName )
        this.fileList.nativeElement.value = ''
        
      }
    }

    reader.readAsDataURL(files[index])
  }

  formatFileName(name: string){
    const string = name.split('.')
    const nameFile= string[0]
    const fileExtension = string[1]
    if(nameFile.length >= 15){
      return(
        `${nameFile.substring(0,5)}...${nameFile.substring(nameFile.length - 5,nameFile.length)}.${fileExtension}`
      )
    }else{
      return name
    }
  }

  sizeToMegaByte(size: number, decimal = 2){
    return `${(size / (1024 * 1024)).toFixed(decimal)}MB`
  }

  remove(index: number){
    const file = this.files[index]
    this.files.splice(index, 1)
    this.fileList.nativeElement.value = ''
    const indexDoc = this.files.findIndex(item => item.fileName == file.fileName)
    if(indexDoc > -1) this.files.splice(indexDoc, 1)
  }

}
