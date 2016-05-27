import React from 'react';
import Textarea from 'react-textarea-autosize';


export default class ContactFrom extends React.Component{

    constructor(props){
        super(props);
        this.updateTextarea = this.updateTextarea.bind(this);
        this.state = {};
        console.log(props.baseUrl);
    }

    // Do some tests before enableling this
    updateTextarea(e){
        e.target.style.height = 'auto';
        e.target.style.height = (e.target.scrollHeight) + 'px';
    }

    sendForm(e){
        let form = $(e.target).parents('form');
        let nameInput = $(form).find('input[name=formName]');
        let emailInput = $(form).find('input[name=formEmail]');
        let phoneInput = $(form).find('input[name=formPhone]');
        let messageInput = $(form).find('textarea[name=formMessage]');

        let name = $(nameInput).val().trim();
        let email = $(emailInput).val().trim();
        let phone = $(phoneInput).val().trim();
        let message = $(messageInput).val().trim();

        // disable all
        $(form).find("input,textarea,button").attr("disabled","disabled");


        let hasError = false;
        if(name != ""){
            this.validation({input:nameInput, valid:true});
        } else {
            hasError = true;
            this.validation({input:nameInput, valid:false, message:"Por favor, preencha o seu nome."});
        }

        if(/.+@.+/.test(email)){
            this.validation({input:emailInput, valid:true});
        } else {
            hasError = true;
            this.validation({input:emailInput});
        }

        if(message.length > 20){
            this.validation({input:messageInput, valid:true});
        } else {
            hasError = true;
            this.validation({input:messageInput});
        }


        if(!hasError){
            var feedbackMessage = (form, message, error=false)=>{
                $(form).prepend('<div class="messageInfo ' + (error ? 'error':'') + ' animated bounceInDown">'+message+'</div>');
                setTimeout(function(){
                    $(form).find(".messageInfo").slideUp("slow", function(){ $(this).remove(); });
                }, 5000);
            }

            $.ajax({
                url:this.props.baseUrl+"/jpapi/contact",
                method:"POST",
                data:{name,email,message,phone},
                success:(data)=>{
                    if(data.success == true){
                        feedbackMessage(form, "Sua mensagem foi enviada com sucesso.");
                        $(form).trigger("reset");
                    } else
                        feedbackMessage(form, "Ocorreu um erro ao enviar a sua mensagem, por favor, tente novamente.", true);
                },
                error:()=>{
                    feedbackMessage(form, 'Ocorreu um erro ao enviar a sua mensagem, por favor, tente novamente.', true);
                },
                complete:()=>{
                    // enable the form
                    $(form).find("input,textarea,button").attr("disabled", null);
                }
            });

        } else {
            $(form).find("input,textarea,button").attr("disabled", null);
        }

    }

    validation({input, valid = false, message = "Este campo possui preenchimento obrigatório."}){
        let className = (valid ? "has-success" : "has-error");
        let iconClass = (valid ? "glyphicon-ok" : "glyphicon-remove")
        let parentDiv = $(input).parents("div:eq(0)");
        if(!$(parentDiv).hasClass("has-feedback")){
            $(parentDiv).addClass("has-feedback");
            $(parentDiv).append('<span class="glyphicon form-control-feedback" aria-hidden="true"></span>');
        }
        $(parentDiv).removeClass("has-error has-success").addClass(className);
        $(parentDiv).find(".glyphicon").removeClass("glyphicon-ok glyphicon-remove").addClass(iconClass);
    }

    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formName">Nome<span className="text-red">*</span>:</label>
                        <input className="name form-control col-md-9 col-sm-12" type="text" placeholder="Nome" id="formName" name="formName" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formEmail">E-mail<span className="text-red">*</span>:</label>
                        <input className="email form-control col-md-9 col-sm-12" type="email" placeholder="E-mail" id="formEmail" name="formEmail" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formPhone">Telefone:</label>
                        <input className="phone form-control col-md-9 col-sm-12" type="tel" placeholder="Telefone" id="formPhone" name="formPhone" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formMessage">Mensagem<span className="text-red">*</span>:</label>
                        <Textarea className="message form-control col-md-9 col-sm-12" placeholder="Mensagem" id="formMessage" name="formMessage" />
                    </div>
                    <div className="col-sm-12">
                        <button type="button" onClick={this.sendForm.bind(this)} className="btn btn-lg btn-primary pull-right">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }

}
