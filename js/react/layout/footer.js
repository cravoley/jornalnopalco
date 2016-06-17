import { Component } from 'react';

export default class Footer extends Component {

    render(){
        return (
            <footer>
                <div className="container">
                    <div className="col-xs-6 col-sm-3 pull-left">
                        <p>
                            <i className="glyphicon glyphicon-phone">
                                <span className="sr-only">Telefone</span>
                            </i> (51) 9999-9999
                        </p>
                    </div>
                    <div className="col-sm-4 copyright center-block">
                        <p className="text-center">
                            Jornal no palco - 2014 - {new Date().getFullYear()} <br />
                            Todos os direitos reservados <br />

                        </p>
                    </div>
                    <div className="col-xs-6 col-sm-3 pull-right">
                        <ul className="list-unstyled list-inline">
                            <li className="twitter">
                                <a className="glyphicon" href="http://www.twitter.com/jornalnopalco" target="_blank"><span className="sr-only">Twitter</span></a>
                            </li>
                            <li className="facebook">
                                <a className="glyphicon" href="https://www.facebook.com/jornalnopalco" target="_blank"><span className="sr-only">Facebook</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}



/*
<footer>
    <div class="container">
        <div class="col-xs-6 col-sm-3 pull-left">
            <p>
                <i class="glyphicon glyphicon-phone">
                    <span class="sr-only">Telefone</span>
                </i> (51) 9999-9999
            </p>
        </div>
        <div class="col-sm-4 copyright center-block">
            <p class="text-center">
                Jornal no palco - 2014 - <?php echo date("Y"); ?> <br />
                Todos os direitos reservados <br />

            </p>
        </div>
        <div class="col-xs-6 col-sm-3 pull-right">
            <ul class="list-unstyled list-inline">
                <li class="twitter">
                    <a class="glyphicon" href="http://www.twitter.com/jornalnopalco" target="_blank"><span class="sr-only">Twitter</span></a>
                </li>
                <li class="facebook">
                    <a class="glyphicon" href="https://www.facebook.com/jornalnopalco" target="_blank"><span class="sr-only">Facebook</span></a>
                </li>
            </ul>
        </div>
    </div>
</footer>
*/
