import { ChartBar, ChartLineUp, ChartPie, ClipboardText, List, Lock, Pencil, SignOut, User, UserCircle } from "phosphor-react";
import { Options } from './Steps/Options';

export const optionsType = {
    FORM: {
        title: 'Form',
        icon: <ClipboardText className="w-4 h-4" />,
        href: '/form',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    RESULTADO: {
        title: 'Resultado',
        icon: <ChartBar className="w-4 h-4" />,
        href: '/resultado',
        css: '',
        dropdown: false,
        dropdownContent: {},
    },
    OPTIONS: {
        title: '',
        icon: <List className="w-4 h-4" />,
        href: '/resultado',
        css: '',
        dropdown: true,
        dropdownContent: {
            RELATORI0S: {
                title: 'Relatórios',
                icon: <ChartPie className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    RELATIORIOS_DROPDOWN_CONTENT_0: {
                        title: 'Absenteismo Total',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-total',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_1: {
                        title: 'Indicadores de Absenteísmo por dia e por departamento',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-departamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_2: {
                        title: 'Indicadores de absenteísmo por dia e por unidade',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/absenteismo-unidade',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_3: {
                        title: 'Tabela de afastados',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/dias-afastamento',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_4: {
                        title: 'Vacinas',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/vacinas',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_5: {
                        title: 'Atestados',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/atestados',
                    },
                    RELATIORIOS_DROPDOWN_CONTENT_6: {
                        title: 'Afastados INSS',
                        icon: <ChartPie className="w-4 h-4" />,
                        href: '/relatorios/inss',
                    },
                },
            },
            GRAFICOS: {
                title: 'Gráficos',
                icon: <ChartLineUp className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    GRAFICOS_DROPDOWN_CONTENT_0: {
                        title: 'Atestados',
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/atestados',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_1: {
                        title: 'Covid',
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/covid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_2: {
                        title: 'Função',
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/funcao',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_3: {
                        title: 'CID',
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/cid',
                    },
                    GRAFICOS_DROPDOWN_CONTENT_4: {
                        title: 'Afastados Pelo INSS',
                        icon: <ChartLineUp className="w-4 h-4" />,
                        href: '/graficos/inss',
                    },
                },
            },
            TREINAMENTO: {
                title: 'Treinamento',
                icon: <User className="w-4 h-4" />,
                href: '/',
                dropdown: true,
                dropdownContent: {
                    TREINAMENTO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Treinamento',
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/cadastro',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_1: {
                        title: 'Treninamento',
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento',
                    },
                    TREINAMENTO_DROPDOWN_CONTENT_2: {
                        title: 'Relatório Treinamento',
                        icon: <User className="w-4 h-4" />,
                        href: '/treinamento/relatorio',
                    },
                },
            },
        },
    },
    USER: {
        title: '',
        icon: <UserCircle className="w-8 h-8" />,
        href: '/resultado',
        css: 'mr-2',
        dropdown: true,
        dropdownContent: {
            CADASTRO: {
                title: 'Cadastros',
                icon: <Pencil className="w-4 h-4" />,
                href: '/',
                css: '',
                dropdown: true,
                dropdownContent: {
                    CADASTRO_DROPDOWN_CONTENT_0: {
                        title: 'Cadastro Usuário',
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/users',
                    },
                    CADASTRO_DROPDOWN_CONTENT_1: {
                        title: 'Cadastro Colega',
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas',
                    },
                    CADASTRO_DROPDOWN_CONTENT_2: {
                        title: 'Importar Colegas',
                        icon: <Pencil className="w-4 h-4" />,
                        href: '/colegas/importar',
                    },
                },
            },
            ALTERAR_SENHA: {
                title: 'Alterar Senha',
                icon: <Lock className="w-4 h-4" />,
                href: '/password',
                dropdown: false,
                dropdownContent: {},
            },
            SAIR: {
                title: 'Sair',
                icon: <SignOut className="w-4 h-4" />,
                href: '/logout',
                dropdown: false,
                dropdownContent: {},
            },
        },
    },
};

export function Navbar() {
    return (
        <nav
            className="h-14 flex text-zinc-100"
            style={{ background: `linear-gradient(25deg, #f4f8f9 13%, #004c77 25%)` }}
        >
            <a href="/" className="focus-visible:outline-none">
                <img
                    src="../src/assets/davita/logo-davita-azul.svg"
                    alt="Logo da Davita"
                    className="ml-5 w-20 h-full flex items-center"
                />
            </a>
            <Options />
        </nav>
    )
}
