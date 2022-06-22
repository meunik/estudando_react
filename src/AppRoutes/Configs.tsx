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
        component: <Form />,
        icon: <ClipboardText className="w-4 h-4" />,
        href: '/form',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    RESULTADO: {
        title: 'Resultado',
        component: <Resultado />,
        icon: <ChartBar className="w-4 h-4" />,
        href: '/resultado',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    OPTIONS: {
        title: '',
        component: null,
        icon: <List className="w-4 h-4" />,
        href: '',
        css: '',
        dropdown: true,
        dropdownContent: {
            RELATORI0S: {
                title: 'Relatórios',
                component: null,
                icon: <ChartPie className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    RELATIORIOS_DROPDOWN_CONTENT_0: {
                        title: 'Absenteismo Total',
                        component: <AbsenteismoTotal />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-total',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_1: {
                        title: 'Indicadores de Absenteísmo por dia e por departamento',
                        component: <AbsenteismoDepartamento />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-departamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_2: {
                        title: 'Indicadores de absenteísmo por dia e por unidade',
                        component: <AbsenteismoUnidade />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-unidade',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_3: {
                        title: 'Tabela de afastados',
                        component: <DiasAfastados />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/dias-afastamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_4: {
                        title: 'Vacinas',
                        component: <Vacinas />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/vacinas',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_5: {
                        title: 'Atestados',
                        component: <RelatoriosAtestados />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/atestados',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_6: {
                        title: 'Afastados INSS',
                        component: <RelatoriosInss />,
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/inss',
                    },
                },
            },
            GRAFICOS: {
                title: 'Gráficos',
                component: null,
                icon: <ChartLineUp className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    GRAFICOS_DROPDOWN_CONTENT_0: {
                        title: 'Atestados',
                        component: <GraficosAtestados />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/atestados',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_1: {
                        title: 'Covid',
                        component: <Covid />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/covid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_2: {
                        title: 'Função',
                        component: <Funcao />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/funcao',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_3: {
                        title: 'CID',
                        component: <Cid />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/cid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_4: {
                        title: 'Afastados Pelo INSS',
                        component: <GraficosInss />,
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/inss',
                    },
                },
            },
            TREINAMENTO: {
                title: 'Treinamento',
                component: null,
                icon: <User className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    TREINAMENTO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Treinamento',
                        component: <CadastroTreinamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/cadastro',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_1: {
                        title: 'Treninamento',
                        component: <Treninamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_2: {
                        title: 'Relatório Treinamento',
                        component: <RelatorioTreinamento />,
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/relatorio',
                    },
                },
            },
        },
    },
    USER: {
        title: '',
        component: null,
        icon: <UserCircle className="w-8 h-8" />,
        href: '',
        css: 'mr-2',
        dropdown: true,
        dropdownContent: {
            CADASTRO: {
                title: 'Cadastros',
                component: null,
                icon: <Pencil className="w-4 h-4" />,
                href: '/',
                css: '',
                dropdown: true,
                dropdownContent: {
                    CADASTRO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Usuário',
                        component: <CadastroUsuario />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/users',
                    },
                    CADASTRO_DROPDOWN_CONTENT_1: {
                        title: 'Cadastro Colega',
                        component: <CadastroColega />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas',
                    },
                    CADASTRO_DROPDOWN_CONTENT_2: {
                        title: 'Importar Colegas',
                        component: <ImportarColegas />,
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas/importar',
                    },
                },
            },
            ALTERAR_SENHA: {
                title: 'Alterar Senha',
                component: <AlterarSenha />,
                icon: <Lock className="w-4 h-4" />,
                href: '/password',
                dropdown: false,
                dropdownContent: {},
            },
            SAIR: {
                title: 'Sair',
                component: <Sair />,
                icon: <SignOut className="w-4 h-4" />,
                href: '/logout',
                dropdown: false,
                dropdownContent: {},
            },
        },
    },
};

export type RoutesType = typeof routesType;

export type RoutesInterface = {
    title: string,
    component: JSX.Element|null,
    icon: JSX.Element|null,
    href: string,
    css: string,
    dropdown: boolean,
    dropdownContent: {
        title: string,
        component: JSX.Element|null,
        icon: JSX.Element|null,
        href: string,
        css: string,
        dropdown: boolean,
        dropdownContent: {},
    }[]|{},
};