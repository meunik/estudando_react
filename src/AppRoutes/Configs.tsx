import { ClipboardText, ChartBar, List, Lock, ChartPie, ChartLineUp, User, UserCircle, Pencil, SignOut } from "phosphor-react";
import { Form } from "../pages/Form";
import { Resultado } from "../pages/Resultado";

import { AbsenteismoDepartamento } from "../pages/Relatorios/AbsenteismoDepartamento";
import { AbsenteismoTotal } from "../pages/Relatorios/AbsenteismoTotal";
import { AbsenteismoUnidade } from "../pages/Relatorios/AbsenteismoUnidade";
import { Atestados as RelatoriosAtestados } from "../pages/Relatorios/Atestados";
import { DiasAfastados } from "../pages/Relatorios/DiasAfastados";
import { Inss as RelatoriosInss } from "../pages/Relatorios/Inss";
import { Vacinas } from "../pages/Relatorios/Vacinas";

import { Atestados as GraficosAtestados } from "../pages/Graficos/Atestados";
import { Covid } from "../pages/Graficos/Covid";
import { Cid } from "../pages/Graficos/Cid";
import { Funcao } from "../pages/Graficos/Funcao";
import { Inss as GraficosInss } from "../pages/Graficos/Inss";

import { Treninamento } from "../pages/Treninamento";
import { CadastroTreinamento } from "../pages/Treninamento/CadastroTreinamento";
import { RelatorioTreinamento } from "../pages/Treninamento/RelatorioTreinamento";

import { CadastroColega } from "../pages/Cadastros/CadastroColega";
import { CadastroUsuario } from "../pages/Cadastros/CadastroUsuario";
import { ImportarColegas } from "../pages/Cadastros/ImportarColegas";

import { AlterarSenha } from "../pages/AlterarSenha";
import { Sair } from "../pages/Sair";

export const routesType = {
    FORM: {
        title: 'Form',
        componet: <Form />,
        icon: <ClipboardText className="w-4 h-4" />,
        href: '/form',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    RESULTADO: {
        title: 'Resultado',
        componet: <Resultado />,
        icon: <ChartBar className="w-4 h-4" />,
        href: '/resultado',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    OPTIONS: {
        title: '',
        componet: null,
        icon: <List className="w-4 h-4" />,
        href: '',
        css: '',
        dropdown: true,
        dropdownContent: {
            RELATORI0S: {
                title: 'Relatórios',
                componet: null,
                icon: <ChartPie className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    RELATIORIOS_DROPDOWN_CONTENT_0: {
                        title: 'Absenteismo Total',
                        componet: <AbsenteismoTotal />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-total',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_1: {
                        title: 'Indicadores de Absenteísmo por dia e por departamento',
                        componet: <AbsenteismoDepartamento />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-departamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_2: {
                        title: 'Indicadores de absenteísmo por dia e por unidade',
                        componet: <AbsenteismoUnidade />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-unidade',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_3: {
                        title: 'Tabela de afastados',
                        componet: <DiasAfastados />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/dias-afastamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_4: {
                        title: 'Vacinas',
                        componet: <Vacinas />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/vacinas',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_5: {
                        title: 'Atestados',
                        componet: <RelatoriosAtestados />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/atestados',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_6: {
                        title: 'Afastados INSS',
                        componet: <RelatoriosInss />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/inss',
                    },
                },
            },
            GRAFICOS: {
                title: 'Gráficos',
                componet: null,
                icon: <ChartLineUp className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    GRAFICOS_DROPDOWN_CONTENT_0: {
                        title: 'Atestados',
                        componet: <GraficosAtestados />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/atestados',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_1: {
                        title: 'Covid',
                        componet: <Covid />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/covid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_2: {
                        title: 'Função',
                        componet: <Funcao />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/funcao',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_3: {
                        title: 'CID',
                        componet: <Cid />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/cid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_4: {
                        title: 'Afastados Pelo INSS',
                        componet: <GraficosInss />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/inss',
                    },
                },
            },
            TREINAMENTO: {
                title: 'Treinamento',
                componet: null,
                icon: <User className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    TREINAMENTO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Treinamento',
                        componet: <CadastroTreinamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/cadastro',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_1: {
                        title: 'Treninamento',
                        componet: <Treninamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_2: {
                        title: 'Relatório Treinamento',
                        componet: <RelatorioTreinamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/relatorio',
                    },
                },
            },
        },
    },
    USER: {
        title: '',
        componet: null,
        icon: <UserCircle className="w-8 h-8" />,
        href: '',
        css: 'mr-2',
        dropdown: true,
        dropdownContent: {
            CADASTRO: {
                title: 'Cadastros',
                componet: null,
                icon: <Pencil className="w-4 h-4" />,
                href: '/',
                css: '',
                dropdown: true,
                dropdownContent: {
                    CADASTRO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Usuário',
                        componet: <CadastroUsuario />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/users',
                    },
                    CADASTRO_DROPDOWN_CONTENT_1: {
                        title: 'Cadastro Colega',
                        componet: <CadastroColega />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas',
                    },
                    CADASTRO_DROPDOWN_CONTENT_2: {
                        title: 'Importar Colegas',
                        componet: <ImportarColegas />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas/importar',
                    },
                },
            },
            ALTERAR_SENHA: {
                title: 'Alterar Senha',
                componet: <AlterarSenha />,
                icon: <Lock className="w-4 h-4" />,
                href: '/password',
                dropdown: false,
                dropdownContent: {},
            },
            SAIR: {
                title: 'Sair',
                componet: <Sair />,
                icon: <SignOut className="w-4 h-4" />,
                href: '/logout',
                dropdown: false,
                dropdownContent: {},
            },
        },
    },
};