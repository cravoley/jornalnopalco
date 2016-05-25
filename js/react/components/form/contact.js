import React from 'react';


export default class ContactFrom extends React.Component{

    render(){
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formName">Nome:</label>
                        <input className="name form-control col-md-9 col-sm-12" type="text" placeholder="Nome" id="formName" name="formName" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formEmail">E-mail:</label>
                        <input className="email form-control col-md-9 col-sm-12" type="email" placeholder="E-mail" id="formEmail" name="formEmail" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formPhone">Telefone:</label>
                        <input className="phone form-control col-md-9 col-sm-12" type="tel" placeholder="Telefone" id="formPhone" name="formPhone" />
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label hidden-sm hidden-xs" htmlFor="formMessage">Mensagem:</label>
                        <textarea className="message form-control col-md-9 col-sm-12" type="tel" placeholder="Mensagem" id="formMessage" name="formMessage" />
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-lg btn-primary pull-right">Enviar</button>
                    </div>
                </form>
            </div>
        );
    }

}
