import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const App = () => {
  return (
    <div>
      <h1 id='main-title'>ARPANet - Conceitos Fundamentais</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1960"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h2 className="vertical-timeline-element-title">Inicio da contextualização de um sistema de comunicação que viria a ser a ARPANet</h2>
          <p>
            Seu propósito inicial era conectar computadores em instituições de pesquisa financiadas pelo Pentágono por meio de linhas telefônicas.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1961"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Comutação de pacotes</h2>
          <p>
            Leonard Kleinrock, estudante de doutorado no MIT, publica sua tese sobre a teoria da comutação de pacotes, introduzindo a ideia de dividir mensagens em pequenos pacotes para transmissão eficiente em redes de computadores.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1962"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Rede Interconectada de Computadores</h2>
          <p>
            J.C.R. Licklider, do MIT, concebe o conceito de uma "Rede Intergaláctica de Computadores", prevendo uma rede global de computadores interconectados.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1965"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Conexão Remota</h2>
          <p>
            A conexão remota de 1965 foi um dos primeiros experimentos práticos que demonstraram a viabilidade da comunicação entre computadores separados geograficamente. Esse experimento foi conduzido por  Lawrence Roberts e Thomas Merrill. O experimento demonstrou que era possível enviar informações entre computadores à distância, mas também revelou problemas significativos, como atraso na transmissão e ineficiência na troca de dados. Essa primeira conexão remota foi um passo essencial para demonstrar que a interligação de computadores era possível.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1966"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Início do projedo ARPANet</h2>
          <p>
            Lawrence Roberts, influenciado pelos trabalhos de Paul Baran e Donald Davies sobre comutação de pacotes, é contratado pela ARPA para liderar o projeto de criação de uma rede de computadores baseada nessa tecnologia.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1968"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">IMP (Interface Message Processor)</h2>
          <p>
            O processador de mensagens da interface (IMP) foi o primeiro roteador de pacotes. Os IMPs monitoraram o status da rede e coletaram estatísticas. Eles foram o coração da ARPANET desde o seu lançamento até sua descomissionamento em 1989. Eles representam a primeira geração dos gateways que agora são conhecidos como roteadores.
          </p>
        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1969"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Lançamento oficial e Primeira Comunicação entre Computadores</h2>
          <p>
            A ARPANET é oficialmente lançada, conectando inicialmente quatro nós: UCLA, Stanford Research Institute (SRI), UC Santa Barbara e Universidade de Utah. Em 29 de outubro, a primeira mensagem é enviada de um computador na UCLA para o SRI, marcando o nascimento da rede.

          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1970"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Network Control Protocol (NCP)</h2>
          <p>
            O Network Control Protocol (NCP) é implementado, permitindo que computadores na ARPANET se comuniquem diretamente, estabelecendo as bases para protocolos de comunicação em rede.

          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1973"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Protocolo TCP/IP</h2>
          <p>
            Com o passar do tempo, mais e mais computadores e redes diferentes foram sendo interligadas à ARPANET, gerando um desafio: a comunicação entre hosts diferentes. Esse problema levou a mais pesquisas sobre protocolos, resultando, em 1973, no desenvolvimento do protocolo TCP/IP, que foi publicado em maio de 1974. O TCP/IP foi um protocolo proposto para a interligação de redes distintas, o que levou à adoção do termo “internet” para descrever uma única rede TCP/IP global. Ele é um conjunto de regras que define como os dados são enviados e recebidos entre computadores.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1978"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Divisão entre TCP e IP</h2>
          <p>
            Separação do TCP/IP em dois protocolos distintos: TCP para controle da transmissão e IP para endereçamento e encaminhamento. IP é a parte que obtém o endereço para o qual os dados são enviados. TCP é responsável pela entrega dos dados assim que o endereço IP for encontrado.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1983"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Adoção do TCP/IP</h2>
          <p>
          Padronização do TCP/IP como protocolo principal da ARPANET, permitindo a criação da Internet moderna. Em 1º de janeiro, conhecido como "Flag Day", a ARPANET completa a transição do NCP para o TCP/IP, permitindo a interoperabilidade entre redes distintas e consolidando os protocolos que formam a base da Internet moderna.

          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1984"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">Sistema de Nomes de Domínio (DNS)</h2>
          <p>
            O Sistema de Nomes de Domínio foi introduzido em 1984, permitindo o balanceamento de carga entre diversos servidores hierárquicos ao redor do mundo, possibilitando uma maior abrangência e velocidade nas consultas de nomes. Antes dele, as máquinas tinham de possuir arquivos extensos com listas de hosts e seus respectivos IPs para realizar as resoluções de nomes. Basicamente, o que o servidor de DNS faz é uma tradução do nome de um domínio para um endereço IP e vice-versa (DNS reverso).
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1989"
          dateClassName='custom-date'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          
        >
          <h2 className="vertical-timeline-element-title">World Wide Web (WWW)</h2>
          <p>
            A Web foi um divisor de águas, introduzindo uma maneira fácil de acessar e compartilhar informações através de hipertextos. Tim Berners-Lee, enquanto trabalhava no CERN, desenvolveu a linguagem HTML, o protocolo HTTP e o conceito de URLs, que juntos formaram a base para a Web. Essa inovação transformou a internet de uma rede de comunicação acadêmica e militar em uma plataforma universal de conhecimento, colaboração e comércio.
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="1989"
         dateClassName='custom-date'
         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
         
        >
          <h2 className="vertical-timeline-element-title">Desativação</h2>
          <p>
            A ARPANET é oficialmente desativada, sendo substituída por redes mais modernas, como a NSFNET, que posteriormente evoluiu para a internet comercial.
          </p>
        </VerticalTimelineElement>
       
        
      </VerticalTimeline>
    </div>
  );
};

export default App;
