import React from 'react';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: false,
        }
    }

    abrirMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    cliquei = (estacao) => {
        console.log(estacao);
        this.props.mudarEstacao(estacao);

    }


    render() {
        return (
            <div className="box-menu">
                <p onClick={this.abrirMenu}>
                    &#9776;
                </p>
                {this.state.menu == true ? (
                    <div className="menu">
                        {this.props.estacoes.map(estacoes => {
                            return (
                                <p className="" onClick={() => this.cliquei(estacoes)} key={estacoes}>
                                    {estacoes}
                                </p>
                            )
                        })}

                    </div>
                ) : (
                        undefined
                    )
                }
                </div>
                )
                            }
        
        
        }