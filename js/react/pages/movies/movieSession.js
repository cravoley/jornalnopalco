import { Component } from 'react';

export default class MovieSession extends Component{
    render(){
        return (
            <div>
                <h2>Sessões de exibição</h2>
                <ul className="list-unstyled">
                    <li>
                        <h3>Praia de belas</h3>
                        <ul className="list-inline">
                            <li>14:00</li>
                            <li>16:00</li>
                            <li>17:00</li>
                            <li>18:00</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Iguatemi</h3>
                        <ul className="list-inline">
                            <li>14:00</li>
                            <li>18:00</li>
                            <li>22:00</li>
                            <li>23:00</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Moinhos</h3>
                        <ul className="list-inline">
                            <li>8:00</li>
                            <li>12:00</li>
                            <li>13:00</li>
                            <li>14:00</li>
                        </ul>
                    </li>
                </ul>
                <span>Informações atualizadas em 16/04/2016</span>
            </div>
        );
    }
}
