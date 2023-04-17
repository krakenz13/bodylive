import Swal from "sweetalert2";
import axios from "axios";

export class HttpClient {

    constructor(){

    }

    async get (url) {
        const {data, status} = await axios.get(url)
        return {data, status}
    }

    post (url, parameters){
       const response = axios.post(url, parameters) 
       const data = response.data
       return {data, status: response.status}
    }
}

export function mostrarAlerta(titulo,icono,foco=''){
    if(foco!=''){
        document.getElementById(foco).focus();
    }

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zoonIn'},
        buttonsStyling:false
    });
}

export function confirmar(urlConSlash,id,titulo,mensaje){
    var url =urlConSlash+id;
    const SwalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger'},



    });
    SwalWithBootstrapButton.fire({
        title:titulo,
        text:mensaje,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<font-awesome-icon icon="fa-solid fa-check" /> Si, eliminar',
        cancelButtonText:'<font-awesome-icon icon="fa-solid fa-ban" /> Cancelar'}).then((res)=>{
            if(res.isConfirmed){
                enviarSolicitud('DELETE',{id:id},url,'Eliminado con exito');
            }else{
                mostrarAlerta('Operacion cancelada ','info');
            }
        });

    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary',popup:'animated zoonIn'},
        buttonsStyling:false
    });
}
export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(res){
        var estado = res.status;
        if(estado == 200){
            mostrarAlerta(mensaje,'success');
            window.setTimeout(function(){
                window.location.href='/'
            },1000);
        }else{
            mostrarAlerta('no se pudo recuperar la respuesta','error');

        }
    }).catch(function(error){
        mostrarAlerta('servidor no disponible','error');


    });
}
   

