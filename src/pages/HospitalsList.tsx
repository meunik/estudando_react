import { Disclosure, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'
import { useState } from 'react'

export function HospitalsList() {
    const [isChecked, setIsChecked] = useState(false);
    const [hosp, setHosp] = useState(hospArr);

    function handleCheck(keyValue: number) {
        let hospChanged = hosp.map( (value, key) => {
            if(key == keyValue) value.checked = !value.checked
            return value
        })
        setHosp(hospChanged)
    }

    function setAllChecked() {
        setIsChecked(!isChecked)
        let hospChanged = hosp.map(value => {
            value.checked = !isChecked
            return value
        })
        setHosp(hospChanged)
    }

    return (
        <Disclosure as="div" className="p-5 border-[0.01rem] border-zinc-200 bg-white">
            {({ open }) => (
                <>
                    <div className="w-full flex items-center justify-between gap-2">
                        <span className="font-semibold flex items-center gap-1">
                            HOSPITAIS [
                                <label htmlFor="todos">TODOS</label>
                                <input
                                    id="todos"
                                    type="checkbox"
                                    className="ckeckbox transition-all duration-200 ease-linear"
                                    checked={isChecked}
                                    onChange={setAllChecked}
                                />
                            ]
                        </span>
                        <Disclosure.Button>
                            <div className="flex items-center gap-2">
                                <span className='text-zinc-400'>{(open)?'OCULTAR':'EXIBIR'}</span>  
                                <CaretDown className={`text-zinc-700 ${open ? "transform rotate-180 transition" : "transition"}`}/>
                            </div>
                        </Disclosure.Button>
                    </div>
            
                    <Disclosure.Panel itemID='#hospitalList' className="grid md:grid-cols-4 sm:grid-cols-12 gap-4 my-5">
                        {hosp.map((value, key) => {
                            return (
                                <li key={key} className='list-none flex items-center gap-2'>
                                    <input
                                        id={`hospital${key}`}
                                        type="checkbox"
                                        name='hospitais[]'
                                        className="ckeckbox transition-all duration-200 ease-linear"
                                        checked={value.checked}
                                        onChange={() => handleCheck(key)}
                                    />
                                    <label htmlFor={`hospital${key}`}>{value.name}</label>
                                </li>
                            )
                        })}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

function hospArr() {
    return hospList.map(value => {
        return {
            checked: false,
            name: value
        }
    })
}

const hospList = [
    'DAVITA ADVANCE',
    'DAVITA AGUAS CLARAS',
    'DAVITA ANCHIETA',
    'DAVITA ARAPONGAS',
    'DAVITA ARARAQUARA',
    'DAVITA ARARUAMA',
    'DAVITA ARAUCÁRIA',
    'DAVITA ASA NORTE',
    'DAVITA ASA SUL',
    'DAVITA BANDEIRANTES',
    'DAVITA BARÃO GERALDO',
    'DAVITA BARRA DA TIJUCA',
    'DAVITA BAURU',
    'DAVITA BENJAMIN CONSTANT',
    'DAVITA BOA VISTA',
    'DAVITA BOTAFOGO',
    'DAVITA BUENO',
    'DAVITA CABO FRIO',
    'DAVITA CAJURU',
    'DAVITA CAMBUCI',
    'DAVITA CAMBUÍ',
    'DAVITA CAMPINAS',
    'DAVITA CAMPO GRANDE',
    'DAVITA CAMPO LARGO',
    'DAVITA CAV',
    'DAVITA CEILÂNDIA',
    'DAVITA CUIABA',
    'DAVITA CURITIBA',
    'DAVITA DF ADM',
    'DAVITA FRANCA',
    'DAVITA GAMA',
    'DAVITA GOIÂNIA',
    'DAVITA GUARULHOS',
    'DAVITA HOLDING',
    'DAVITA HORTOLÂNDIA',
    'DAVITA INTERLAGOS',
    'DAVITA INTRA-HOSPITALAR LONDRINA',
    'DAVITA ITABORAI',
    'DAVITA ITAPEVI',
    'DAVITA JARDIM DAS IMBUIAS',
    'DAVITA JD ITAPECERICA',
    'DAVITA JOÃO DIAS',
    'DAVITA JOÃO PESSOA',
    'DAVITA JUIZ DE FORA',
    'DAVITA LAGO PARQUE',
    'DAVITA LAGOA NOVA',
    'DAVITA LAPA',
    'DAVITA LINHARES',
    'DAVITA LONDRINA',
    'DAVITA MADALENA',
    'DAVITA MEIRELES',
    'DAVITA MOEMA',
    'DAVITA MONDUBIM',
    'DAVITA MONTE SERRAT',
    'DAVITA NATAL',
    'DAVITA NEFROMED',
    'DAVITA NEPHRON CARE',
    'DAVITA NITERÓI',
    'DAVITA NOVA IGUAÇU',
    'DAVITA NOVA VENEZA',
    'DAVITA NOVO MUNDO',
    'DAVITA PACINI',
    'DAVITA PENHA',
    'DAVITA PERDIZES',
    'DAVITA PINHEIROS',
    'DAVITA RECIFE',
    'DAVITA RIEN BARRA DA TIJUCA',
    'DAVITA RIEN RAMOS',
    'DAVITA RIO BRANCO',
    'DAVITA RIO PRETO',
    'DAVITA ROLÂNDIA',
    'DAVITA SALVADOR',
    'DAVITA SANTANA',
    'DAVITA SANTO ANDRÉ',
    'DAVITA SANTOS',
    'DAVITA SANTOS DUMONT',
    'DAVITA SÃO BERNARDO',
    'DAVITA SÃO CAETANO',
    'DAVITA SÃO GERARDO',
    'DAVITA SÃO JOSÉ DOS CAMPOS',
    'DAVITA SERRA',
    'DAVITA SILVA JARDIM',
    'DAVITA SOBRADINHO',
    'DAVITA SOS',
    'DAVITA SUMARÉ',
    'DAVITA TAGUATINGA',
    'DAVITA TAQUARAL',
    'DAVITA TAUBATÉ',
    'DAVITA TEJIPIO',
    'DAVITA TRANSRIM',
    'DAVITA UBER',
    'DAVITA UTR',
    'DAVITA VALINHOS',
    'DAVITA VALPARAISO',
    'DAVITA VILA BASTOS',
    'DAVITA VILA IZABEL',
    'DAVITA VILA OLÍMPIA',
    'DAVITA VITORIA',
]